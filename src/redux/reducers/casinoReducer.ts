import { casino, InitialState, MadeDeck } from '../../types/casino';

const initialState: InitialState = {
  suits: ['spades', 'diamonds', 'clubs', 'hearts'],
  values: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  deck: [],
  isPreview: true,
};

export const casinoReducer = (state = initialState, action: MadeDeck): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case casino.MADE_DECK:
      return {
        ...state,
        deck: payload,
        isPreview: false,
      };
    default:
      return state;
  }
};
