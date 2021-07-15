import { Deck, ItemDeck } from './casino';

export enum GameSessionTypes {
  CHANGE_DEAL = 'CHANGE_DEAL',
  CHANGE_SIZE_BET = 'CHANGE_SIZE_BET',
  CHANGE_DEALER_DECK = 'CHANGE_DEALER_DECK',
  CHANGE_USER_DECK = 'CHANGE_USER_DECK',
  CHANGE_START_DEALING_CARDS = 'CHANGE_START_DEALING_CARDS',
  CLEAR_CUR_GAME = 'CLEAR_CUR_GAME',
  INCREASE_IDX_DECK = 'INCREASE_IDX_DECK',
  CHECK_HANDS = 'CHECK_HANDS',
  USER_WON = 'USER_WON',
  USER_LOSE = 'USER_LOSE',
  USER_TIE = 'USER_TIE',
}

export enum UserStatus {
  WON = 'WON',
  LOSE = 'LOSE',
  TIE = 'TIE',
  START = 'START',
}

export type InitialState = {
  dealStatus: boolean,
  startDealingCards: boolean,
  dealerPoints: number[],
  userPoints: number,
  chosenBet: number,
  dealerDeck: Deck,
  userDeck: Deck,
  idxDeck: number,
  checkHands: boolean,
  userWon: UserStatus,
}

interface ChangeDeal {
  type: GameSessionTypes.CHANGE_DEAL;
}

interface ChangeSizeBet {
  type: GameSessionTypes.CHANGE_SIZE_BET;
  payload: number;
}

interface ChangeDealerDeck {
  type: GameSessionTypes.CHANGE_DEALER_DECK;
  payload: ItemDeck;
}

interface ChangeUserDeck {
  type: GameSessionTypes.CHANGE_USER_DECK;
  payload: ItemDeck;
}

interface ClearDeck {
  type: GameSessionTypes.CLEAR_CUR_GAME;
}

interface IncreaseIdxDeck {
  type: GameSessionTypes.INCREASE_IDX_DECK;
}

interface CheckHands {
  type: GameSessionTypes.CHECK_HANDS;
}

interface UserWon {
  type: GameSessionTypes.USER_WON;
}

interface UserLose {
  type: GameSessionTypes.USER_LOSE;
}

interface UserTie {
  type: GameSessionTypes.USER_TIE;
}

interface changeStartDealingCards {
  type: GameSessionTypes.CHANGE_START_DEALING_CARDS;
}

export type GameSessionAction = ChangeDeal | ChangeSizeBet | ChangeDealerDeck | ChangeUserDeck
| changeStartDealingCards | ClearDeck | IncreaseIdxDeck | CheckHands | UserWon | UserLose | UserTie;
