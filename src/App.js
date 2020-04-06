import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset} from './actions';

function App({ counter, increment, decrement, reset}) {
  return (
    <div className="App">
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default connect(state => ({
  counter: state.counter
}), { increment, decrement, reset })(App);
