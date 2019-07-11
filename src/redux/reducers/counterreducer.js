import { ADD_ONE, SUB_ONE } from '../actions/types';

const initialState = { num: 0, time: 0 };

const countReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ONE:
      return { ...state, num: state.num + 1 };
    case SUB_ONE:
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

export default countReducer;
