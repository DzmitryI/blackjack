import { combineReducers } from 'redux';
import { casinoReducer } from './casinoReducer';

export const rootReducer = combineReducers({
  casino: casinoReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>
