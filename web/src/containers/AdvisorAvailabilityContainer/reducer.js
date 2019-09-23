import {
  ADD_AVAILABILITIES,
  ADD_TODAY,
  REMOVE_AVAILABILITY,
} from './constants';

const Availability = (state = {}, action) => {
  switch (action.type) {
    case ADD_AVAILABILITIES:
      return {
        ...state,
        advisorTimes: { ...action.availabilities },
      };
    case ADD_TODAY:
      return { ...state, ...action.today };
    case REMOVE_AVAILABILITY:
      return {
        ...state,
        advisorTimes: {
          ...state.advisorTimes,
          [action.availability.advisorId]: state.advisorTimes[
            action.availability.advisorId
          ].filter(time => action.availability.time !== time),
        },
      };
    default:
      return state;
  }
};

export default Availability;
