import { InitialState, userAction } from '../../types/user';

const initialState: InitialState = {
  cash: 5000,
};

export const userReducer = (state = initialState, action: userAction): InitialState => {
  const { type } = action;
  switch (type) {
    // case types.:
    // return {
    // ...state,
    // cash: payload,
    // };
    default:
      return state;
  }
};
