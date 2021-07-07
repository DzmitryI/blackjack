import { combineReducers } from 'redux';
import { casinoReducer } from './casinoReducer';
import { userReducer } from './userReducer';
import { gameSessionReducer } from './gameSessionReducer';

export const rootReducer = combineReducers({
  casino: casinoReducer,
  user: userReducer,
  gameSession: gameSessionReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>
