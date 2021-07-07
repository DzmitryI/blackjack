import { changeDeal, gameSession, InitialState } from '../../types/gameSession';

const initialState: InitialState = {
  dealStatus: false,
  dealerPoints: 0,
  userPoints: 0,

};

export const gameSessionReducer = (state = initialState, action: changeDeal): InitialState => {
  const { type } = action;
  switch (type) {
    case gameSession.CHANGE_DEAL:
      return {
        ...state,
        dealStatus: !state.dealStatus,
      };
    default:
      return state;
  }
};
