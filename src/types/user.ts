export enum UserTypes {
  INCREASE_BET = 'INCREASE_BET',
  DECREASE_BET = 'DECREASE_BET',
  CLEAR_BET = 'CLEAR_BET',
  INCREASE_CASH = 'INCREASE_CASH',
  DECREASE_CASH = 'DECREASE_CASH',
}

export type InitialState = {
  cash: number,
  bet: number,
}

export interface IncreaseBetAction {
  type: UserTypes.INCREASE_BET;
  payload: number;
}

export interface DecreaseBetAction {
  type: UserTypes.DECREASE_BET;
  payload: number;
}

export interface ClearBetAction {
  type: UserTypes.CLEAR_BET;
}

export interface IncreaseCashAction {
  type: UserTypes.INCREASE_CASH;
  payload: number;
}

export interface DecreaseCashAction {
  type: UserTypes.DECREASE_CASH;
  payload: number;
}

export type userBet = IncreaseBetAction | DecreaseBetAction | ClearBetAction | IncreaseCashAction | DecreaseCashAction;
