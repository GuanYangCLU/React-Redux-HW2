import { ADD_ONE, SUB_ONE } from '../actions/types';

const initialState = 0;

const countReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ONE:
      return state + 1;
    case SUB_ONE:
      return state - 1;
    default:
      return state;
  }
};

export default countReducer;
