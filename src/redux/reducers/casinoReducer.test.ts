import { casinoReducer, initialState } from './casinoReducer';
import { CasinoTypes } from '../../types/casino';

describe('casino reducer', () => {
  it('MADE_DECK ', () => {
    const actionMadeDeck = {
      type: CasinoTypes.MADE_DECK,
      payload: [{ value: '2', suit: 'spades', count: 2 }],
    };
    expect(casinoReducer(initialState, actionMadeDeck)).toEqual({
      ...initialState,
      deck: actionMadeDeck.payload,
      isPreview: false,
    });
  });

  it('SHUFFLE_DECK ', () => {
    const actionShuffleDeck = {
      type: CasinoTypes.SHUFFLE_DECK,
      payload: [{ value: '2', suit: 'spades', count: 2 }],
    };
    expect(casinoReducer(initialState, actionShuffleDeck)).toEqual({
      ...initialState,
      deck: actionShuffleDeck.payload,
    });
  });
});
