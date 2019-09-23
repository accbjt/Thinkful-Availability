import { ADD_BOOKED_APPOINTMENT, ADD_APPOINTMENTS } from './constants';

const AppointmentReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKED_APPOINTMENT:
      return [...state, action.appointment];
    case ADD_APPOINTMENTS:
      return [...state, ...action.appointments];
    default:
      return state;
  }
};

export default AppointmentReducer;
