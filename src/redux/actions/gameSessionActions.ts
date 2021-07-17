import { Dispatch } from 'redux';
import { GameSessionAction, GameSessionTypes } from '../../types/gameSession';
import { UserActions, UserTypes } from '../../types/user';
import { CasinoAction, Chips, Deck } from '../../types/casino';
import { shuffleDeck } from './casinoActions';
import { changeChipSize } from '../../components/helpers';

interface StartSession {
  bet: number;
  deck: Deck
}

export function startSession({ bet, deck }: StartSession) {
  return (dispatch: Dispatch<GameSessionAction | UserActions | CasinoAction>) => {
    dispatch({
      type: GameSessionTypes.CHANGE_DEAL,
    });
    dispatch({
      type: UserTypes.DECREASE_CASH,
      payload: bet,
    });
    dispatch(shuffleDeck(deck));
    dispatch({
      type: GameSessionTypes.CHANGE_START_DEALING_CARDS,
    });
    let curIndex = 0;
    const timerId = setInterval(() => {
      if (curIndex % 2 === 0) {
        dispatch({
          type: GameSessionTypes.CHANGE_USER_DECK,
          payload: deck[curIndex],
        });
      } else {
        dispatch({
          type: GameSessionTypes.CHANGE_DEALER_DECK,
          payload: deck[curIndex],
        });
      }
      curIndex += 1;
      if (curIndex === 4) {
        dispatch({
          type: GameSessionTypes.CHANGE_START_DEALING_CARDS,
        });
        clearInterval(timerId);
      }
    }, 500);
  };
}

interface ChangeSizeBet {
  chips: Chips;
  chosenBet: number;
  type?: string;
}

export function changeSizeBet({ chips, chosenBet, type }: ChangeSizeBet) {
  return (dispatch: Dispatch<GameSessionAction>) => {
    let value = chosenBet;
    if (type) {
      value = changeChipSize(chips, chosenBet, type);
    }
    dispatch({
      type: GameSessionTypes.CHANGE_SIZE_BET,
      payload: value,
    });
  };
}

interface SessionResult {
  userPoints: number;
  maxCount: number;
  bet: number;
  dealerPoints: number[];
}

export function sessionResult({
  dealerPoints, maxCount, userPoints, bet,
}: SessionResult) {
  return (dispatch: Dispatch<GameSessionAction | UserActions>) => {
    const allDealerPoints = dealerPoints.reduce((acc, point) => acc + point, 0);
    if (allDealerPoints >= maxCount || (allDealerPoints < userPoints && userPoints < maxCount)) {
      dispatch({
        type: UserTypes.INCREASE_CASH,
        payload: bet * 2,
      });
      dispatch({
        type: GameSessionTypes.USER_WON,
      });
    } else if (allDealerPoints === userPoints) {
      dispatch({
        type: UserTypes.INCREASE_CASH,
        payload: bet,
      });
      dispatch({
        type: GameSessionTypes.USER_TIE,
      });
    } else if (userPoints >= maxCount) {
      dispatch({
        type: GameSessionTypes.USER_BUST,
      });
    } else {
      dispatch({
        type: GameSessionTypes.USER_LOSE,
      });
    }
  };
}

interface CheckSessionResult {
  dealerPoints: number[];
  deck: Deck;
  idxDeck: number;
}

export function checkSessionResult({ dealerPoints, deck, idxDeck }: CheckSessionResult) {
  return (dispatch: Dispatch<GameSessionAction>) => {
    const allDealerPoints = dealerPoints.reduce((acc, point) => acc + point, 0);
    dispatch({
      type: GameSessionTypes.CHECK_HANDS,
    });
    if (allDealerPoints < 17) {
      dispatch({
        type: GameSessionTypes.CHANGE_DEALER_DECK,
        payload: deck[idxDeck],
      });
      dispatch({
        type: GameSessionTypes.INCREASE_IDX_DECK,
      });
    }
  };
}
