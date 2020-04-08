import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
   // console.log(this.props);
    return (
      <div className="App">
          Счетчик <span> {this.props.counter} </span>
          <hr/>
          <button onClick={this.props.onAdd}>Add</button>
          <button onClick={this.props.onSub}>Sub</button>
          <hr/>
          <button onClick={() => {this.props.onaddNumber(15)}}>Add 15</button>
          <button onClick={() => {this.props.onaddNumber(-10)}}>Sub 10</button>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAdd: () => dispatch(
      {type: 'ADD'}
    ),
    onSub: () => dispatch(
      {type: 'SUB'}
    ),
    onaddNumber: (number) => dispatch(
      {
        type: 'ADD_NUMBER',
        payload: number
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
