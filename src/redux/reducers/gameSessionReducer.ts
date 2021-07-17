import {
  GameSessionAction, GameSessionTypes, InitialState, UserStatus,
} from '../../types/gameSession';

const initialState: InitialState = {
  dealStatus: false,
  startDealingCards: false,
  dealerPoints: [],
  userPoints: 0,
  chosenBet: 1,
  dealerDeck: [],
  userDeck: [],
  idxDeck: 4,
  checkHands: false,
  userWon: UserStatus.START,
};

export const gameSessionReducer = (state = initialState, action: GameSessionAction): InitialState => {
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
    case GameSessionTypes.INCREASE_IDX_DECK:
      return {
        ...state,
        idxDeck: state.idxDeck + 1,
      };
    case GameSessionTypes.CHECK_HANDS:
      return {
        ...state,
        checkHands: true,
      };
    case GameSessionTypes.USER_WON:
      return {
        ...state,
        userWon: UserStatus.WON,
      };
    case GameSessionTypes.USER_BLACK_JACK:
      return {
        ...state,
        userWon: UserStatus.BLACK_JACK,
      };
    case GameSessionTypes.USER_LOSE:
      return {
        ...state,
        userWon: UserStatus.LOSE,
      };
    case GameSessionTypes.USER_TIE:
      return {
        ...state,
        userWon: UserStatus.TIE,
      };
    case GameSessionTypes.USER_BUST:
      return {
        ...state,
        userWon: UserStatus.BUST,
      };
    case GameSessionTypes.CHANGE_START_DEALING_CARDS:
      return {
        ...state,
        startDealingCards: !state.startDealingCards,
      };
    case GameSessionTypes.CLEAR_CUR_GAME:
      return {
        dealStatus: false,
        startDealingCards: false,
        dealerPoints: [],
        userPoints: 0,
        chosenBet: 1,
        dealerDeck: [],
        userDeck: [],
        idxDeck: 4,
        checkHands: false,
        userWon: UserStatus.START,
      };

    default:
      return state;
  }
};
