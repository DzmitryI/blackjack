export enum gameSession {
  CHANGE_DEAL = 'CHANGE_DEAL',
}

export type InitialState = {
  dealStatus: boolean,
  dealerPoints: number,
  userPoints: number,
}

export interface changeDeal {
  type: gameSession.CHANGE_DEAL;
}
