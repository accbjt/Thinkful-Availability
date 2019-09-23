import { ADD_BOOKED_APPOINTMENT, ADD_APPOINTMENTS } from './constants';
import { REMOVE_AVAILABILITY } from '../AdvisorAvailabilityContainer/constants';
import { SHOW_ERROR } from '../NameFormContainer/constants';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const addBookedAppointment = appointment => ({
  type: ADD_BOOKED_APPOINTMENT,
  appointment,
});

export const addAppointments = appointments => ({
  type: ADD_APPOINTMENTS,
  appointments,
});

export const getAppointments = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:4433/appointments');
      const availabilities = await res.json();

      dispatch(addAppointments(availabilities));
    } catch (err) {
      console.error(err);
    }
  };
};

export const postAppointment = appointment => {
  return async (dispatch, getState) => {
    const state = getState();

    if (state.name.text) {
      try {
        const res = await fetch('http://localhost:4433/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: state.name.text,
            ...appointment,
          }),
        });

        const json = await res.json();

        dispatch(addBookedAppointment(json));
        dispatch({ type: REMOVE_AVAILABILITY, availability: json });

        scrollToBottom();
      } catch (err) {
        console.error(err);
      }
    } else {
      dispatch({ type: SHOW_ERROR });

      scrollToTop();
    }
  };
};
