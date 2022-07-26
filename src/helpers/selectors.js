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

export function getInterviewersForDay(state, day) {
  for (let element of state.days) {
    if (element.name === element) {
      return element.interviewers.map(id => state.interviewers[id]);
    }
  }
  return [];
}
