import { ADD_ONE, SUB_ONE } from './types';
import store from '../store';

export const addOne = () => {
  store.dispatch({ type: ADD_ONE, payload: {} });
};

export const subOne = () => {
  store.dispatch({ type: SUB_ONE, payload: {} });
};
