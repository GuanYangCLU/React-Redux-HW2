import { ADD_ONE, SUB_ONE } from './types';
// 两种写法等效(return dispatch => {} 和 () => dispatch => {})
// 若想App里直接调用里面function，需要定义store，再store.dispatch
// 若借助mapDispatchToProps, 则用props.funcName调用map到props中的新函数名

export const addOne = () => {
  return dispatch => {
    dispatch({ type: ADD_ONE, payload: {} });
  };
};

export const subOne = () => dispatch => {
  dispatch({ type: SUB_ONE, payload: {} });
};
