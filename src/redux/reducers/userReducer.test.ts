import { userReducer } from './userReducer';
import { ClearBetAction, UserTypes } from '../../types/user';

describe('user reducer', () => {
  const stateBefore = {
    cash: 5000,
    bet: 22,
  };

  it('INCREASE BET', () => {
    const action = {
      type: UserTypes.INCREASE_BET,
      payload: 22,
    };
    expect(userReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      bet: 44,
    });
  });

  it('DECREASE BET', () => {
    const action = {
      type: UserTypes.DECREASE_BET,
      payload: 22,
    };
    expect(userReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      bet: 0,
    });
  });

  it('CLEAR BET', () => {
    const action: ClearBetAction = {
      type: UserTypes.CLEAR_BET,
    };
    expect(userReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      bet: 0,
    });
  });

  it('INCREASE CASH', () => {
    const action = {
      type: UserTypes.INCREASE_CASH,
      payload: 100,
    };
    expect(userReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      cash: 5100,
    });
  });

  it('DECREASE CASH', () => {
    const action = {
      type: UserTypes.DECREASE_CASH,
      payload: 100,
    };
    expect(userReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      cash: 4900,
    });
  });
});
