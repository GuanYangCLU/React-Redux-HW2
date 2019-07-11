import { TIMER_START, TIMER_STOP, TIMER_RESET, TEXT_CHANGE } from './types';
import store from '../store';

let timer = null;

export const timerStartStop = isOn => {
  if (isOn) {
    clearInterval(timer);
    store.dispatch({
      type: TIMER_STOP,
      payload: { on: !isOn, text: 'Start' }
    });
  } else {
    store.dispatch({
      type: TEXT_CHANGE,
      payload: { text: 'Stop' }
    });
    timer = setInterval(() => {
      store.dispatch({
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
  store.dispatch({ type: TIMER_RESET, payload: {} });
};
