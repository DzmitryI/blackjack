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
  USER_BUST = 'USER_BUST',
  USER_BLACK_JACK = 'USER_BLACK_JACK',
}

export enum UserStatus {
  WON = 'WON',
  BLACK_JACK = 'BLACK_JACK',
  LOSE = 'LOSE',
  TIE = 'TIE',
  BUST = 'BUST',
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

export interface ChangeDeal {
  type: GameSessionTypes.CHANGE_DEAL;
}

export interface ChangeSizeBet {
  type: GameSessionTypes.CHANGE_SIZE_BET;
  payload: number;
}

export interface ChangeDealerDeck {
  type: GameSessionTypes.CHANGE_DEALER_DECK;
  payload: ItemDeck;
}

export interface ChangeUserDeck {
  type: GameSessionTypes.CHANGE_USER_DECK;
  payload: ItemDeck;
}

export interface IncreaseIdxDeck {
  type: GameSessionTypes.INCREASE_IDX_DECK;
}

export interface CheckHands {
  type: GameSessionTypes.CHECK_HANDS;
}

export interface UserWon {
  type: GameSessionTypes.USER_WON;
}

export interface UserBlackJack {
  type: GameSessionTypes.USER_BLACK_JACK;
}

export interface UserLose {
  type: GameSessionTypes.USER_LOSE;
}

export interface UserTie {
  type: GameSessionTypes.USER_TIE;
}

export interface UserBust {
  type: GameSessionTypes.USER_BUST;
}

export interface ChangeStartDealingCards {
  type: GameSessionTypes.CHANGE_START_DEALING_CARDS;
}

export interface ClearDeck {
  type: GameSessionTypes.CLEAR_CUR_GAME;
}

export type GameSessionAction = ChangeDeal | ChangeSizeBet | ChangeDealerDeck | ChangeUserDeck |
  ChangeStartDealingCards | ClearDeck | IncreaseIdxDeck | CheckHands | UserWon | UserLose | UserTie | UserBust |
  UserBlackJack;
