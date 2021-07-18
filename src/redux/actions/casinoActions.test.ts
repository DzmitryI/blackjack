import { madeDeck, shuffleDeck } from './casinoActions';
import { CasinoTypes } from '../../types/casino';

describe('casino actions', () => {
  const suits = ['clubs', 'hearts'];
  const values = ['2', '3', 'A'];
  const deck = [
    { value: '2', suit: 'clubs', count: 2 },
    { value: '3', suit: 'clubs', count: 3 },
    { value: 'A', suit: 'clubs', count: 11 },
    { value: '2', suit: 'hearts', count: 2 },
    { value: '3', suit: 'hearts', count: 3 },
    { value: 'A', suit: 'hearts', count: 11 },
  ];
  it('made deck', () => {
    expect(madeDeck({ values, suits })).toEqual({
      type: CasinoTypes.MADE_DECK,
      payload: [
        { value: '2', suit: 'clubs', count: 2 },
        { value: '3', suit: 'clubs', count: 3 },
        { value: 'A', suit: 'clubs', count: 11 },
        { value: '2', suit: 'hearts', count: 2 },
        { value: '3', suit: 'hearts', count: 3 },
        { value: 'A', suit: 'hearts', count: 11 },
      ],
    });
  });
});
