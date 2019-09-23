import {
  ADD_AVAILABILITIES,
  ADD_TODAY,
  REMOVE_AVAILABILITY,
} from './constants';

export const addAvailabilities = availabilities => ({
  type: ADD_AVAILABILITIES,
  availabilities,
});

export const addToday = today => ({
  type: ADD_TODAY,
  today,
});

export const removeAvailability = appointment => ({
  type: REMOVE_AVAILABILITY,
  appointment,
});

export const getAvailabilities = () => {
  return async dispatch => {
    try {
      const json = await fetch('http://localhost:4433/availabilities').then(
        res => res.json(),
      );

      dispatch(addAvailabilities(json));
    } catch (error) {
      console.error("Failed to fetch 'availabilities' data", error);
    }
  };
};

export const getToday = () => {
  return async dispatch => {
    try {
      const json = await fetch('http://localhost:4433/today').then(res =>
        res.json(),
      );

      dispatch(addToday(json));
    } catch (error) {
      console.error("Failed to fetch 'today' data", error);
    }
  };
};
