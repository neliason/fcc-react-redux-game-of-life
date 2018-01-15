import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as LifeActionCreators from '../actions/life';
import '../App.css';
import BoardSquare from '../components/BoardSquare'
import ControlPanel from '../components/ControlPanel'
import Header from '../components/Header'

class App extends Component {
  
  static propTypes = {
    board: PropTypes.array.isRequired,
    isRunning: PropTypes.bool.isRequired,
    generation: PropTypes.number.isRequired,
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
        <Header 
          title="Game Of Life"
        />
        <ControlPanel 
          isRunning={this.props.isRunning}
          generation={this.props.generation}
          runGame={this.props.runGame}
          pauseGame={this.props.pauseGame}
          clearBoard={this.props.clearBoard}
        />
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
