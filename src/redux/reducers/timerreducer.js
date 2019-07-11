import {
  TIMER_START,
  TIMER_STOP,
  TIMER_RESET,
  TEXT_CHANGE
} from '../actions/types';

const initialState = { num: 0, time: 0, on: false, text: 'Start' };
// let timer = null;

const timerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TIMER_START:
      return { ...state, time: state.time + 1, ...payload };

    case TIMER_STOP:
      return { ...state, time: state.time, ...payload };
    case TIMER_RESET:
      return { ...state, time: 0 };
    case TEXT_CHANGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default timerReducer;
