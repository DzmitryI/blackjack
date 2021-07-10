import { GameSessionTypes, GameSessionAction, InitialState } from '../../types/gameSession';

const initialState: InitialState = {
  dealStatus: false,
  dealerPoints: 0,
  userPoints: 0,
  chosenBet: 1,

};

export const gameSessionReducer = (state = initialState, action: GameSessionAction): InitialState => {
  // const { type } = action;
  switch (action.type) {
    case GameSessionTypes.CHANGE_DEAL:
      return {
        ...state,
        dealStatus: !state.dealStatus,
      };
    case GameSessionTypes.CHANGE_SIZE_BET:
      return {
        ...state,
        chosenBet: action.payload,
      };
    default:
      return state;
  }
};
