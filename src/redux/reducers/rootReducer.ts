import { combineReducers } from 'redux';
import { casinoReducer } from './casinoReducer';
import { userReducer } from './userReducer';
import { gameSessionReducer } from './gameSessionReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  casino: casinoReducer,
  user: userReducer,
  gameSession: gameSessionReducer,
  modal: modalReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>
