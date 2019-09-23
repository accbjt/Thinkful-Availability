import { ADD_NAME, CLEAR_NAME } from './constants';

export const addName = name => ({
  type: ADD_NAME,
  name,
});

export const clearName = () => ({
  type: CLEAR_NAME,
});
