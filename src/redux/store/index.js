import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.log('previous state', store.getState());
  console.log('dispatching', action);
  next(action);
  console.log('next state', store.getState());
};

// const initialState = { num: 0, time: 0 };

const store = createStore(
  rootReducer,
  //   initialState,
  applyMiddleware(thunk)
);

export default store;
