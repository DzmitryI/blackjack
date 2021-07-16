import { GameSessionAction, GameSessionTypes } from '../../types/gameSession';

interface GameSessionProps {
  allDealerPoints: number;
  userPoints: number;
  maxCount: number;
}

export function gameSessionResult({ allDealerPoints, userPoints, maxCount }: GameSessionProps): GameSessionAction {
  if (allDealerPoints >= maxCount || (allDealerPoints < userPoints && userPoints < maxCount)) {
    return {
      type: GameSessionTypes.USER_WON,
    };
  }
  if (allDealerPoints === userPoints) {
    return {
      type: GameSessionTypes.USER_TIE,
    };
  }
  if (userPoints >= maxCount) {
    return {
      type: GameSessionTypes.USER_BUST,
    };
  }
  return {
    type: GameSessionTypes.USER_LOSE,
  };
}
