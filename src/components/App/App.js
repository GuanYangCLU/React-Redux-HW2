import React from 'react';
import { connect } from 'react-redux';
import { addOne, subOne } from '../../redux/actions/counter';

function App(props) {
  return (
    <div className='App'>
      <div className='num'>{props.num}</div>
      <button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    num: state
  };
};

export default connect(mapStateToProps)(App);
