import { TIMER_START, TIMER_STOP, TIMER_RESET } from '../actions/types';

const initialState = {};

const timerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TIMER_START:
      return state + 1;
    case TIMER_STOP:
      return state - 1;
    case TIMER_RESET:
      return state;
    default:
      return state;
  }
};

export default timerReducer;
