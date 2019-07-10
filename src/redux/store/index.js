import { createStore } from 'redux';
// import rootReducer from '../reducers';
import countReducer from '../reducers/countreducer';

const initialState = 0;

const store = createStore(countReducer, initialState);

export default store;
