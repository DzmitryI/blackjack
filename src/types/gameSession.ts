export enum gameSession {
  CHANGE_DEAL = 'CHANGE_DEAL',
}

export type InitialState = {
  deal: boolean,
}

export interface changeDeal {
  type: gameSession.CHANGE_DEAL;
}
