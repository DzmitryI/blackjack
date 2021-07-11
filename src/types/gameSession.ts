import { Deck, ItemDeck } from './casino';

export enum GameSessionTypes {
  CHANGE_DEAL = 'CHANGE_DEAL',
  CHANGE_SIZE_BET = 'CHANGE_SIZE_BET',
  CHANGE_DEALER_DECK = 'CHANGE_DEALER_DECK',
  CHANGE_USER_DECK = 'CHANGE_USER_DECK',
  CLEAR_DECK = 'CLEAR_DECK',
  INCREASE_IDX_DECK = 'INCREASE_IDX_DECK',
  RESET_IDX_DECK = 'RESET_IDX_DECK',
}

export type InitialState = {
  dealStatus: boolean,
  dealerPoints: number[],
  userPoints: number,
  chosenBet: number,
  dealerDeck: Deck,
  userDeck: Deck,
  idxDeck: number,
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
  type: GameSessionTypes.CLEAR_DECK;
}

interface IncreaseIdxDeck {
  type: GameSessionTypes.INCREASE_IDX_DECK;
}

export type GameSessionAction = ChangeDeal | ChangeSizeBet | ChangeDealerDeck | ChangeUserDeck | ClearDeck | IncreaseIdxDeck;
