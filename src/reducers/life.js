import * as LifeActionTypes from '../actiontypes/life';

const initialState = {
  board: [],
  selectedIndex: -1,
  isRunning: false,
  generation: 0,
}

export default function Life(state=initialState, action) {
  switch(action.type) {
    case LifeActionTypes.ADD_LIFE: {
			return state;
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