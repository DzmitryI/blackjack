import { InitialState, user, userBet } from '../../types/user';

const initialState: InitialState = {
  cash: 5000,
  bet: 0,
};

export const userReducer = (state = initialState, action: userBet): InitialState => {
  const { type } = action;
  switch (type) {
    case user.INCREASE_BET:
      return {
        ...state,
        bet: state.bet + 1,
      };
    case user.DECREASE_BET:
      return {
        ...state,
        bet: state.bet - 1,
      };
    case user.CLEAR_BET:
      return {
        ...state,
        bet: 0,
      };
    default:
      return state;
  }
};
