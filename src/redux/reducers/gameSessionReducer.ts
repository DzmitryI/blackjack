import { GameSessionTypes, GameSessionAction, InitialState } from '../../types/gameSession';

const initialState: InitialState = {
  dealStatus: false,
  dealerPoints: [],
  userPoints: 0,
  chosenBet: 1,
  dealerDeck: [],
  userDeck: [],
  idxDeck: 4,
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
    case GameSessionTypes.CHANGE_DEALER_DECK:
      return {
        ...state,
        dealerDeck: [...state.dealerDeck, action.payload],
        dealerPoints: [...state.dealerPoints, action.payload.count],
      };
    case GameSessionTypes.CHANGE_USER_DECK:
      return {
        ...state,
        userDeck: [...state.userDeck, action.payload],
        userPoints: state.userPoints + action.payload.count,
      };
    case GameSessionTypes.CLEAR_CUR_GAME:
      return {
        dealStatus: false,
        dealerPoints: [],
        userPoints: 0,
        chosenBet: 1,
        dealerDeck: [],
        userDeck: [],
        idxDeck: 4,
      };
    case GameSessionTypes.INCREASE_IDX_DECK:
      return {
        ...state,
        idxDeck: state.idxDeck + 1,
      };
    default:
      return state;
  }
};
