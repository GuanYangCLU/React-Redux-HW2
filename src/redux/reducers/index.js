import { combineReducers } from 'redux';
import counterReducer from './counterreducer';
import timerReducer from './timerreducer';

const rootReducer = combineReducers({
  counterReducer,
  timerReducer
});

export default rootReducer;
