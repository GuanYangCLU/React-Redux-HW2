import React from 'react';
import { connect } from 'react-redux';
import { addOne, subOne } from '../../redux/actions/counter';
import { timerStartStop, timerReset } from '../../redux/actions/timer';
// combineReducer后，state为整体reducer的obj，里面含有{counterRdc, TimerRdc,...}
// 需要向下取具体的reducer再取key，一般就整体将一个reducer里的state拿来，用什么props点什么

// 也可以直接把import过来的function放到props中省去mapDispatchToProps
// 不过最后connect的时候要在mapStateToProps后面加引入的函数作为props
// 有选择的插入props⬇
function App({ addOne, subOne, timerStartStop, timerReset, output, timer }) {
  return (
    <div className='App'>
      <div className='num'>Count: {output.num}</div>
      <div className='time'>Time: {timer.time}</div>
      <button onClick={() => timerStartStop(timer.on)}>{timer.text}</button>
      <button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
      <button onClick={timerReset}>Reset</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    output: state.counterReducer,
    timer: state.timerReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOne: () => {
      dispatch(addOne());
    },
    subOne: () => {
      dispatch(subOne());
    },
    timerStartStop: isOn => {
      dispatch(timerStartStop(isOn));
    },
    timerReset: () => {
      dispatch(timerReset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
