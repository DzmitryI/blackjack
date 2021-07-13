import { UserActions, UserTypes } from '../../types/user';

interface DecreaseProps {
  chosenBet: number;
  bet: number;
}

export function decreaseBet({ chosenBet, bet }: DecreaseProps): UserActions {
  let decreaseSize: number;
  if (chosenBet > bet) {
    decreaseSize = bet;
  } else {
    decreaseSize = chosenBet;
  }
  return {
    type: UserTypes.DECREASE_BET,
    payload: decreaseSize,
  };
}

interface IncreaseProps {
  chosenBet: number;
  bet: number;
  maxBet: number;
}

export function increaseBet({ chosenBet, bet, maxBet }: IncreaseProps): UserActions {
  let increaseSize = chosenBet;
  if (bet + chosenBet > maxBet) {
    increaseSize = maxBet - bet;
  }
  return {
    type: UserTypes.INCREASE_BET,
    payload: increaseSize,
  };
}
