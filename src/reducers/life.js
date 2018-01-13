import * as LifeActionTypes from '../actiontypes/life';

const BOARD_SIZE = 20;
let initialBoard = new Array(BOARD_SIZE);
for (let i = 0; i < BOARD_SIZE; i++) {
  initialBoard[i] = new Array(BOARD_SIZE);
  for (let j = 0; j < BOARD_SIZE; j++) {
    initialBoard[i][j] = 0;
  }
}

const initialState = {
  board: initialBoard,
  isRunning: false,
  generation: 0,
}

export default function Life(state=initialState, action) {
  switch(action.type) {
    case LifeActionTypes.TOGGLE_LIFE: {
      let newBoard = [...state.board];
      newBoard[action.rowIndex][action.colIndex] = newBoard[action.rowIndex][action.colIndex] === 0 ? 1 : 0;
      return {
        ...state,
        board: newBoard
      }
    }

    case LifeActionTypes.CLEAR_BOARD: {
      let newBoard = [...state.board];
      newBoard = newBoard.map(row => {
        row = row.map(square => {
          square = 0;
          return square;
        });
        return row;
      });
      return {
        board: newBoard,
        isRunning: false,
        generation: 0
      }
    }

    case LifeActionTypes.NEXT_GENERATION: {
      let newBoard = state.board.map((row, rowIndex) => {
        row = row.map((square, colIndex) => {
          let livingNeighbors = 0;
          for(let i = -1; i <= 1; i++) {
            for(let j = -1; j <= 1; j++) {
              const outOfBounds = state.board[rowIndex + i] === undefined || state.board[rowIndex + i][colIndex + j] === undefined;
              livingNeighbors += outOfBounds || (i === 0 && j === 0) ? 0 : state.board[rowIndex + i][colIndex + j];
            }
          }
          if(square === 1 && livingNeighbors < 2)
            square = 0;
          else if(square === 1 && livingNeighbors > 3)
            square = 0;
          else if(square === 0 && livingNeighbors === 3)
            square = 1;
          return square;
        });
        return row;
      });
      
      return {
        ...state,
        board: newBoard,
        generation: state.generation + 1
      }
    }

    case LifeActionTypes.RUN_GAME: {
      return {
        ...state,
        isRunning: true
      }
    }

    case LifeActionTypes.PAUSE_GAME: {
      return {
        ...state,
        isRunning: false
      }
    }

    default:
      return state;
  }
}