import { combineReducers } from 'redux';
import { casinoReducer } from './casinoReducer';
import { userReducer } from './userReducer';
import { gameSessionReducer } from './gameSessionReducer';
import { optionsReducer } from './optionsReducer';

export const rootReducer = combineReducers({
  casino: casinoReducer,
  user: userReducer,
  gameSession: gameSessionReducer,
  options: optionsReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>
