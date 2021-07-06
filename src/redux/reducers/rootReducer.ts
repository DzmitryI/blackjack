import { combineReducers } from 'redux';
import { casinoReducer } from './casinoReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  casino: casinoReducer,
  user: userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>
