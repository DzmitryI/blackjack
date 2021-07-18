import { decreaseBet, increaseBet } from './userActions';
import { UserTypes } from '../../types/user';

describe('user actions', () => {
  it('decrease bet', () => {
    expect(decreaseBet({ chosenBet: 5, bet: 1 })).toEqual({
      type: UserTypes.DECREASE_BET,
      payload: 1,
    });
    expect(decreaseBet({ chosenBet: 5, bet: 100 })).toEqual({
      type: UserTypes.DECREASE_BET,
      payload: 5,
    });
  });

  it('increase bet', () => {
    expect(increaseBet({ chosenBet: 400, bet: 200, maxBet: 500 })).toEqual({
      type: UserTypes.INCREASE_BET,
      payload: 300,
    });
    expect(increaseBet({ chosenBet: 255, bet: 1, maxBet: 500 })).toEqual({
      type: UserTypes.INCREASE_BET,
      payload: 255,
    });
  });
});
