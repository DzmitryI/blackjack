import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeSizeBet } from './gameSessionActions';
import { GameSessionTypes } from '../../types/gameSession';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('game session action', () => {
  it('change size bet', () => {
    const expectedActions = [
      {
        type: GameSessionTypes.CHANGE_SIZE_BET,
        payload: 5,
      }];
    const store = mockStore({});
    const chips = [{ value: 1, color: 'green' }];
    const chosenBet = 5;
    const type = 'dec';
    store.dispatch(changeSizeBet({ chips, chosenBet, type }));
    const actions = store.getActions();
    expect(actions).toEqual([expectedActions]);
  });
});
