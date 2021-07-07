export enum user {
  INCREASE_BET = 'INCREASE_BET',
  DECREASE_BET = 'DECREASE_BET',
  CLEAR_BET = 'CLEAR_BET'
}

export type InitialState = {
  cash: number,
  bet: number,
}

export interface increaseBetAction {
  type: user.INCREASE_BET;
}

export interface decreaseBetAction {
  type: user.DECREASE_BET;
}

export interface clearBetAction {
  type: user.CLEAR_BET;
}

export type userBet = increaseBetAction | decreaseBetAction | clearBetAction;
