import { createStore } from 'redux';
import rootReducer from '../reducers/index';
// import counterReducer from '../reducers/counterreducer';

const initialState = { num: 0, time: 0 };

const store = createStore(rootReducer, initialState);

export default store;
