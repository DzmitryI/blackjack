import { casinoReducer } from './casinoReducer';
import { CasinoTypes } from '../../types/casino';

describe('casino reducer', () => {
  const stateBefore = {
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

  it('MADE_DECK ', () => {
    const actionMadeDeck = {
      type: CasinoTypes.MADE_DECK,
      payload: [{ value: '2', suit: 'spades', count: 2 }],
    };
    expect(casinoReducer(stateBefore, actionMadeDeck)).toEqual({
      ...stateBefore,
      deck: [{ value: '2', suit: 'spades', count: 2 }],
      isPreview: false,
    });
  });

  it('SHUFFLE_DECK ', () => {
    const actionShuffleDeck = {
      type: CasinoTypes.SHUFFLE_DECK,
      payload: [{ value: '9', suit: 'spades', count: 9 }, { value: '2', suit: 'spades', count: 2 }],
    };
    expect(casinoReducer(stateBefore, actionShuffleDeck)).toEqual({
      ...stateBefore,
      deck: [{ value: '9', suit: 'spades', count: 9 }, { value: '2', suit: 'spades', count: 2 }],
    });
  });
});
