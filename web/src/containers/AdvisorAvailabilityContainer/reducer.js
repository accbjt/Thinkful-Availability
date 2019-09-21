import { ADD_AVAILABILITIES } from './constants';

const formatAvailabilities = availabilities => {
  return Object.keys(availabilities).reduce((accum, key) => {
    const allAvailabilitiesByDate = availabilities[key];

    Object.keys(allAvailabilitiesByDate).forEach(date => {
      const id = allAvailabilitiesByDate[date];

      accum = {
        ...accum,
        [id]: accum[id] ? [...accum[id], date] : [date],
      };
    });

    return accum;
  }, {});
};

const Availability = (state = [], action) => {
  switch (action.type) {
    case ADD_AVAILABILITIES:
      return { ...state, ...formatAvailabilities(action.availabilities) };
    default:
      return state;
  }
};

export default Availability;
