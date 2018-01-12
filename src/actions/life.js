import * as LifeActionTypes from '../actiontypes/life';

export const runGame = () => {
  return {
    type: LifeActionTypes.RUN_GAME
  };
};

export const pauseGame = () => {
  return {
    type: LifeActionTypes.PAUSE_GAME
  };
};

export const toggleLife = (rowIndex, colIndex) => {
  return {
    type: LifeActionTypes.TOGGLE_LIFE,
    rowIndex,
    colIndex
  };
};

export const clearBoard = () => {
  return {
    type: LifeActionTypes.CLEAR_BOARD
  };
};