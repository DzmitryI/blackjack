export enum CasinoTypes {
  MADE_DECK = 'MADE_DECK',
  SHUFFLE_DECK = 'SHUFFLE_DECK',
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

export type ItemDeck = {value: string, suit: string, count: number}

export type Deck = ItemDeck[];

interface MadeDeck {
  type: CasinoTypes.MADE_DECK;
  payload: Deck;
}

interface ShuffleDeck {
  type: CasinoTypes.SHUFFLE_DECK;
  payload: Deck;
}

export type CasinoAction = MadeDeck | ShuffleDeck;
