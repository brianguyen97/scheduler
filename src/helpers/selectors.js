// Returns an array of appointments for a single day
export function getAppointmentsForDay(state, day) {
  let accumulator = [];

  for (const element of state.days) {
    if (element.name === day) {
      element.appointments.forEach(id =>
        accumulator.push(state.appointments[id])
      );
    }
  }
  return accumulator;
}

// If theres an interview, return data, else null
export function getInterview(state, interview) {
  let accumulator = {};
  if (interview) {
    const id = interview.interviewer;
    accumulator.interviewer = state.interviewers[id];
    accumulator.student = interview.student;
    return accumulator;
  }
  return null;
}

// Returns interviewers for data in form of an array
export function getInterviewersForDay(state, day) {
  let data = [];

  for (const singleDay of state.days) {
    if (singleDay.name === day) {
      singleDay.interviewers.forEach(interviewer =>
        data.push(state.interviewers[interviewer])
      );
    }
  }

  return data;
}
