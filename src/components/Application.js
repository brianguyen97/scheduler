import React from 'react';
import 'components/Application.scss';
import DayList from './DayList';
import Appointment from './Appointment';
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from 'helpers/selectors';
import { useApplicationData } from 'hooks/useApplicationData';

export default function Application(props) {
  // Custom Hook
  const { state, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  // Appointments and Interviewers Data
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewersArray = getInterviewersForDay(state, state.day);

  // Data for appointment
  const appointmentArray = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        interviewers={interviewersArray}
        interview={interview}
        time={appointment.time}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        {/* Days of the week */}
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Display Appointment Data */}
        {appointmentArray}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
