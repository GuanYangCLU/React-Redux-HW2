import React from 'react';
import { connect } from 'react-redux';
import { addOne, subOne } from '../../redux/actions/counter';
import { timerStartStop, timerReset } from '../../redux/actions/timer';
// combineReducer后，state为整体reducer的obj，里面含有{counterRdc, TimerRdc,...}
// 需要向下取具体的reducer再取key，一般就整体将一个reducer里的state拿来，用什么props点什么
function App(props) {
  return (
    <div className='App'>
      <div className='num'>Count: {props.output.num}</div>
      <div className='time'>Time: {props.timer.time}</div>
      <button onClick={() => timerStartStop(props.timer.on)}>
        {props.timer.text}
      </button>
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

export default connect(mapStateToProps)(App);
