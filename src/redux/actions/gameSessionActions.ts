import { Dispatch } from 'redux';
import { GameSessionAction, GameSessionTypes } from '../../types/gameSession';
import { UserActions, UserTypes } from '../../types/user';
import { Deck } from '../../types/casino';

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
