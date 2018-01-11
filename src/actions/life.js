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