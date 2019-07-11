import {
  TIMER_START,
  TIMER_STOP,
  TIMER_RESET,
  TEXT_CHANGE
} from '../actions/types';
// reducer: PURE Function
const initialState = { num: 0, time: 0, on: false, text: 'Start' };
// let timer = null;

const timerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TIMER_START:
      return { ...state, ...payload, time: state.time + 1 };

    case TIMER_STOP:
      return { ...state, ...payload, time: state.time };
    case TIMER_RESET:
      return { ...state, ...payload, time: 0 };
    case TEXT_CHANGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default timerReducer;
