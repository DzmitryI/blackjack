import { gameSessionReducer, initialState } from './gameSessionReducer';
import {
  ChangeDeal,
  ChangeDealerDeck,
  ChangeSizeBet, ChangeStartDealingCards,
  ChangeUserDeck,
  CheckHands, ClearDeck,
  GameSessionTypes,
  IncreaseIdxDeck, UserBlackJack, UserBust, UserLose,
  UserStatus, UserTie,
  UserWon,
} from '../../types/gameSession';

describe('game session reducer', () => {
  it('CHANGE_DEAL', () => {
    const action: ChangeDeal = {
      type: GameSessionTypes.CHANGE_DEAL,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      dealStatus: !initialState.dealStatus,
    });
  });

  it('CHANGE SIZE BET', () => {
    const action: ChangeSizeBet = {
      type: GameSessionTypes.CHANGE_SIZE_BET,
      payload: 900,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      chosenBet: action.payload,
    });
  });

  it('CHANGE DEALER DECK', () => {
    const action: ChangeDealerDeck = {
      type: GameSessionTypes.CHANGE_DEALER_DECK,
      payload: { value: '2', suit: 'spades', count: 2 },
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      dealerDeck: [action.payload],
      dealerPoints: [action.payload.count],
    });
  });

  it('CHANGE USER DECK', () => {
    const action: ChangeUserDeck = {
      type: GameSessionTypes.CHANGE_USER_DECK,
      payload: { value: '2', suit: 'spades', count: 2 },
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      userDeck: [action.payload],
      userPoints: action.payload.count,
    });
  });

  it('INCREASE IDX DECK', () => {
    const action: IncreaseIdxDeck = {
      type: GameSessionTypes.INCREASE_IDX_DECK,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      idxDeck: initialState.idxDeck + 1,
    });
  });

  it('CHECK HANDS', () => {
    const action: CheckHands = {
      type: GameSessionTypes.CHECK_HANDS,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      checkHands: true,
    });
  });

  it('USER WON', () => {
    const action: UserWon = {
      type: GameSessionTypes.USER_WON,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      userWon: UserStatus.WON,
    });
  });

  it('USER BLACK JACK', () => {
    const action: UserBlackJack = {
      type: GameSessionTypes.USER_BLACK_JACK,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      userWon: UserStatus.BLACK_JACK,
    });
  });

  it('USER LOSE', () => {
    const action: UserLose = {
      type: GameSessionTypes.USER_LOSE,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      userWon: UserStatus.LOSE,
    });
  });

  it('USER TIE', () => {
    const action: UserTie = {
      type: GameSessionTypes.USER_TIE,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      userWon: UserStatus.TIE,
    });
  });

  it('USER BUST', () => {
    const action: UserBust = {
      type: GameSessionTypes.USER_BUST,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      userWon: UserStatus.BUST,
    });
  });

  it('CHANGE START DEALING CARDS', () => {
    const action: ChangeStartDealingCards = {
      type: GameSessionTypes.CHANGE_START_DEALING_CARDS,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
      startDealingCards: !initialState.startDealingCards,
    });
  });

  it('CLEAR DECK', () => {
    const action: ClearDeck = {
      type: GameSessionTypes.CLEAR_CUR_GAME,
    };
    expect(gameSessionReducer(initialState, action)).toEqual({
      ...initialState,
    });
  });
});
