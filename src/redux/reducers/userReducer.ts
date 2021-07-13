import { InitialState, UserActions, UserTypes } from '../../types/user';

const initialState: InitialState = {
  cash: 5000,
  bet: 0,
};

export const userReducer = (state = initialState, action: UserActions): InitialState => {
  // const { type, payload } = action;
  switch (action.type) {
    case UserTypes.INCREASE_BET:
      return {
        ...state,
        bet: state.bet + action.payload,
      };
    case UserTypes.DECREASE_BET:
      return {
        ...state,
        bet: state.bet - action.payload,
      };
    case UserTypes.CLEAR_BET:
      return {
        ...state,
        bet: 0,
      };
    case UserTypes.INCREASE_CASH:
      return {
        ...state,
        cash: state.cash + action.payload,
      };
    case UserTypes.DECREASE_CASH:
      return {
        ...state,
        cash: state.cash - action.payload,
      };
    default:
      return state;
  }
};
