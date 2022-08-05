import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then(all => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function spots(id) {
    let spots = 0;
    let day = null;

    for (let day in state.days) {
      if (state.days[day].appointments.includes(id)) {
        spots++;
      }
    }
    const updated = {
      ...state.days,
      spots,
    };
    return setState(prev => ({ ...prev, updated }));
  }

  function update(req) {
    const days = state.days.map(day => {
      if (day.name === state.day) {
        if (req === 'bookAppointment') {
          return { ...day, spots: day.spots - 1 };
        } else {
          return { ...day, spots: day.spots + 1 };
        }
      } else {
        return { ...day };
      }
    });
    return days;
  }

  // Book Interview
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        const days = update('bookAppointment');
        setState(prev => ({ ...prev, appointments, days }));
      })
      .catch(e => console.log(e));
  };

  // Cancel Interview
  const cancelInterview = id => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        const days = update();
        setState({ ...state, appointments, days });
      })
      .catch(e => console.log(e));
  };
  return { state, setDay, bookInterview, cancelInterview };
}
