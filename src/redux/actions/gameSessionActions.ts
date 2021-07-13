import { GameSessionAction, GameSessionTypes } from '../../types/gameSession';

interface GameSessionProps {
  allDealerPoints: number;
  userPoints: number;
  maxBet: number;
}

export function gameSessionResult({ allDealerPoints, userPoints, maxBet }: GameSessionProps): GameSessionAction {
  if (allDealerPoints > maxBet || allDealerPoints < userPoints) {
    return {
      type: GameSessionTypes.USER_WON,
    };
  } if (allDealerPoints === userPoints) {
    return {
      type: GameSessionTypes.USER_TIE,
    };
  }
  return {
    type: GameSessionTypes.USER_LOSE,
  };
}
