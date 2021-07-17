import { casinoReducer, initialState } from './casinoReducer';
import { CasinoTypes } from '../../types/casino';

describe('casino reducer', () => {
  it('casinoReducer ', () => {
    const action = {
      type: CasinoTypes.MADE_DECK,
      payload: [{ value: '2', suit: 'spades', count: 2 }],
    };
    expect(casinoReducer(initialState, action)).toEqual({
      ...initialState,
      deck: action.payload,
      isPreview: false,
    });
  });
});
