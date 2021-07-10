export enum casino {
  MADE_DECK = 'MADE_DECK',
}

export type Chips = {value: number, color: string}[];

export type InitialState = {
  suits: string[],
  values: string[],
  chips: {value: number, color: string}[],
  deck: Deck,
  isPreview: boolean,
  minBet: number,
  maxBet: number,
}

export type PayloadDeck = {values: string[], suits: string[]}

type ItemDeck = {value: string, suit: string}

export type Deck = ItemDeck[];

export interface MadeDeck {
  type: casino.MADE_DECK;
  payload: Deck;
}
