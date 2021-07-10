export enum casino {
  MADE_DECK = 'MADE_DECK',
}

export type InitialState = {
  suits: string[],
  values: string[],
  chips: {value: number, color: string}[]
  deck: Deck,
  isPreview: boolean,
}

export type PayloadDeck = {values: string[], suits: string[]}
type ItemDeck = {value: string, suit: string}

export type Deck = ItemDeck[];

export interface MadeDeck {
  type: casino.MADE_DECK;
  payload: Deck;
}
