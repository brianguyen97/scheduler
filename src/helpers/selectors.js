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
