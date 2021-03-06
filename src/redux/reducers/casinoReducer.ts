import { CasinoTypes, InitialState, CasinoAction } from '../../types/casino';

export const initialState: InitialState = {
  suits: ['spades', 'diamonds', 'clubs', 'hearts'],
  values: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  chips: [
    { value: 1, color: '#45BE44' },
    { value: 5, color: '#E24159' },
    { value: 10, color: '#F57E04' },
    { value: 50, color: '#5878FC' },
    { value: 100, color: '#A2050C' },
    { value: 500, color: '#4F4F4F' },
  ],
  deck: [],
  isPreview: true,
  minBet: 1,
  maxBet: 500,
  maxCount: 22,
};

export const casinoReducer = (state = initialState, action: CasinoAction): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case CasinoTypes.MADE_DECK:
      return {
        ...state,
        deck: payload,
        isPreview: false,
      };
    case CasinoTypes.SHUFFLE_DECK:
      return {
        ...state,
        deck: payload,
      };
    default:
      return state;
  }
};
