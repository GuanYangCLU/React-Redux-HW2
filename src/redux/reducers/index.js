import { combineReducers } from 'redux';
import countReducer from './countreducer';
import timerReducer from './timerreducer';

const rootReducer = combineReducers({
  countReducer,
  timerReducer
});

export default rootReducer;
