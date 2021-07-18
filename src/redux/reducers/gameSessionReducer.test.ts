import { gameSessionReducer } from './gameSessionReducer';
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

const stateBefore = {
  dealStatus: false,
  startDealingCards: false,
  dealerPoints: [],
  userPoints: 0,
  chosenBet: 1,
  dealerDeck: [],
  userDeck: [],
  idxDeck: 4,
  checkHands: false,
  userWon: UserStatus.START,
};

describe('game session reducer', () => {
  it('CHANGE_DEAL', () => {
    const action: ChangeDeal = {
      type: GameSessionTypes.CHANGE_DEAL,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      dealStatus: true,
    });
  });

  it('CHANGE SIZE BET', () => {
    const action: ChangeSizeBet = {
      type: GameSessionTypes.CHANGE_SIZE_BET,
      payload: 500,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      chosenBet: 500,
    });
  });

  it('CHANGE DEALER DECK', () => {
    const action: ChangeDealerDeck = {
      type: GameSessionTypes.CHANGE_DEALER_DECK,
      payload: { value: '2', suit: 'spades', count: 2 },
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      dealerDeck: [{ value: '2', suit: 'spades', count: 2 }],
      dealerPoints: [2],
    });
  });

  it('CHANGE USER DECK', () => {
    const action: ChangeUserDeck = {
      type: GameSessionTypes.CHANGE_USER_DECK,
      payload: { value: '2', suit: 'spades', count: 2 },
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      userDeck: [{ value: '2', suit: 'spades', count: 2 }],
      userPoints: 2,
    });
  });

  it('INCREASE IDX DECK', () => {
    const action: IncreaseIdxDeck = {
      type: GameSessionTypes.INCREASE_IDX_DECK,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      idxDeck: 5,
    });
  });

  it('CHECK HANDS', () => {
    const action: CheckHands = {
      type: GameSessionTypes.CHECK_HANDS,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      checkHands: true,
    });
  });

  it('USER WON', () => {
    const action: UserWon = {
      type: GameSessionTypes.USER_WON,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      userWon: UserStatus.WON,
    });
  });

  it('USER BLACK JACK', () => {
    const action: UserBlackJack = {
      type: GameSessionTypes.USER_BLACK_JACK,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      userWon: UserStatus.BLACK_JACK,
    });
  });

  it('USER LOSE', () => {
    const action: UserLose = {
      type: GameSessionTypes.USER_LOSE,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      userWon: UserStatus.LOSE,
    });
  });

  it('USER TIE', () => {
    const action: UserTie = {
      type: GameSessionTypes.USER_TIE,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      userWon: UserStatus.TIE,
    });
  });

  it('USER BUST', () => {
    const action: UserBust = {
      type: GameSessionTypes.USER_BUST,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      userWon: UserStatus.BUST,
    });
  });

  it('CHANGE START DEALING CARDS', () => {
    const action: ChangeStartDealingCards = {
      type: GameSessionTypes.CHANGE_START_DEALING_CARDS,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      startDealingCards: true,
    });
  });

  it('CLEAR DECK', () => {
    const action: ClearDeck = {
      type: GameSessionTypes.CLEAR_CUR_GAME,
    };
    expect(gameSessionReducer(stateBefore, action)).toEqual({
      ...stateBefore,
    });
  });
});
