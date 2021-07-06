import { types } from '../actions/actionTypes';

export type Deck = { value: string, suit: string }[]

type InitialState = {
  suits: string[],
  values: string[],
  deck: Deck,
  isPreview: boolean,
}

const initialState: InitialState = {
  suits: ['spades', 'diamonds', 'clubs', 'hearts'],
  values: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  deck: [],
  isPreview: true,
};

export const casinoReducer = (state = initialState, action: any): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case types.MADE_DECK:
      return {
        ...state,
        deck: payload,
        isPreview: false,
      };
    default:
      return state;
  }
};
