import { ADD_NAME, SHOW_ERROR } from './constants';

const initialState = {
  text: '',
};

const NameFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return { text: action.name };
    case SHOW_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default NameFormReducer;
