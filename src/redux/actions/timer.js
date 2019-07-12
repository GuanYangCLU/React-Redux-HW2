import { TIMER_START, TIMER_STOP, TIMER_RESET, TEXT_CHANGE } from './types';
// import store from '../store';

let timer = null;

export const timerStartStop = isOn => dispatch => {
  if (isOn) {
    clearInterval(timer);
    dispatch({
      type: TIMER_STOP,
      payload: { on: !isOn, text: 'Start' }
    });
  } else {
    dispatch({
      type: TEXT_CHANGE,
      payload: { text: 'Stop' }
    });
    timer = setInterval(() => {
      dispatch({
        type: TIMER_START,
        payload: { on: !isOn, text: 'Stop' }
      });
    }, 1000);
  }
  //   store.dispatch({ type: TIMER_START, payload: {} });
};

// export const timerStop = () => {
//   store.dispatch({ type: TIMER_STOP, payload: {} });
// };

export const timerReset = () => {
  return dispatch => dispatch({ type: TIMER_RESET, payload: {} });
};
