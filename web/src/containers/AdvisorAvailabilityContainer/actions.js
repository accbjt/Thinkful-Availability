import { ADD_AVAILABILITIES } from './constants';

export const addAvailabilities = availabilities => ({
  type: ADD_AVAILABILITIES,
  availabilities,
});

export const fetchAvailabilities = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:4433/today');
      const json = await res.json();

      dispatch(addAvailabilities(json));
    } catch (error) {
      console.error("Failed to fetch 'today' data", error);
    }
  };
};
