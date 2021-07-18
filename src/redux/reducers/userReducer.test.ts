import { userReducer, initialState } from './userReducer';
import { ClearBetAction, UserTypes } from '../../types/user';

describe('user reducer', () => {
  it('INCREASE BET', () => {
    const action = {
      type: UserTypes.INCREASE_BET,
      payload: 22,
    };
    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      bet: initialState.bet + action.payload,
    });
  });

  it('DECREASE BET', () => {
    const action = {
      type: UserTypes.DECREASE_BET,
      payload: 22,
    };
    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      bet: initialState.bet - action.payload,
    });
  });

  it('CLEAR BET', () => {
    const action: ClearBetAction = {
      type: UserTypes.CLEAR_BET,
    };
    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      bet: 0,
    });
  });

  it('INCREASE CASH', () => {
    const action = {
      type: UserTypes.INCREASE_CASH,
      payload: 100,
    };
    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      cash: initialState.cash + action.payload,
    });
  });

  it('DECREASE CASH', () => {
    const action = {
      type: UserTypes.DECREASE_CASH,
      payload: 100,
    };
    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      cash: initialState.cash - action.payload,
    });
  });
});
