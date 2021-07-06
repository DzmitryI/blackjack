import { stat } from 'fs';
import { types } from '../actions/actionTypes';

type InitialState = {
  cash: number
}

const initialState: InitialState = {
  cash: 5000,
};

export const userReducer = (state = initialState, action: any): InitialState => {
  const { type, payload } = action;
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
