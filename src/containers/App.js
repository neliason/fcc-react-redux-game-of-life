import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as LifeActionCreators from '../actions/life';
import '../App.css';

class App extends Component {
  
  /*
  static propTypes = {
    runTheGame: PropTypes.func.isRequired
  }; */
  
  render() {
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <div className="control-btns">
          <Button onClick={this.props.runGame}>Run</Button>
          <Button onClick={this.props.pauseGame}>Pause</Button>
          <Button>Clear</Button>
          Generation: {this.props.generation}
          Running: {this.props.isRunning.toString()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    generation: state.generation,
    isRunning: state.isRunning
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    runGame: () => {
      dispatch(LifeActionCreators.runGame())
    },
    pauseGame: () => {
      dispatch(LifeActionCreators.pauseGame())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
