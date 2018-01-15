import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as LifeActionCreators from '../actions/life';
import '../App.css';
import BoardSquare from '../components/BoardSquare'

class App extends Component {
  
  static propTypes = {
    board: PropTypes.array.isRequired,
    isRunning: PropTypes.bool.isRequired,
    runGame: PropTypes.func.isRequired,
    pauseGame: PropTypes.func.isRequired,
    toggleLife: PropTypes.func.isRequired,
    clearBoard: PropTypes.func.isRequired,
    nextGeneration: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.interval = setInterval(this.props.nextGeneration, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <div className="control-btns row">
          <div className="col-xs-3">
            { this.props.isRunning ?
              <Button onClick={this.props.pauseGame}>Pause</Button>
              :
              <Button onClick={this.props.runGame}>Run</Button>
            }
          </div>
          <div className="col-xs-3">
            <Button onClick={this.props.clearBoard}>Clear</Button>
          </div>
          <div className="col-xs-6">
            Generation: {this.props.generation}
          </div>
        </div>
        <div className="board">
          {this.props.board.map((row, rowIndex) => {
            return(
              <div key={rowIndex} className="board-row">
                {row.map((square, colIndex) => {
                  return(
                    <BoardSquare
                      square={square}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                      toggleLife={this.props.toggleLife}
                      key={colIndex}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    generation: state.generation,
    isRunning: state.isRunning,
    board: state.board,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    runGame: () => {
      dispatch(LifeActionCreators.runGame())
    },
    pauseGame: () => {
      dispatch(LifeActionCreators.pauseGame())
    },
    toggleLife: (rowIndex, colIndex) => {
      dispatch(LifeActionCreators.toggleLife(rowIndex, colIndex))
    },
    clearBoard: () => {
      dispatch(LifeActionCreators.clearBoard())
    },
    nextGeneration: () => {
      dispatch(LifeActionCreators.nextGeneration())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
