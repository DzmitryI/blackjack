export enum GameSessionTypes {
  CHANGE_DEAL = 'CHANGE_DEAL',
  CHANGE_SIZE_BET = 'CHANGE_SIZE_BET',
}

export type InitialState = {
  dealStatus: boolean,
  dealerPoints: number,
  userPoints: number,
  chosenBet: number,
}

interface ChangeDeal {
  type: GameSessionTypes.CHANGE_DEAL;
}

interface ChangeSizeBet {
  type: GameSessionTypes.CHANGE_SIZE_BET;
  payload: number;
}

export type GameSessionAction = ChangeDeal | ChangeSizeBet;
