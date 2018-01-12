import * as LifeActionTypes from '../actiontypes/life';

const BOARD_SIZE = 20;
let initialBoard = new Array(BOARD_SIZE);
for (var i = 0; i < BOARD_SIZE; i++) {
  initialBoard[i] = new Array(BOARD_SIZE);
  for (var j = 0; j < BOARD_SIZE; j++) {
    initialBoard[i][j] = 0;
  }
}

const initialState = {
  board: initialBoard,
  selectedIndex: -1,
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
        ...state,
        board: newBoard
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