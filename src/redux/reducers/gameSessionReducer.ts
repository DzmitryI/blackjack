import { changeDeal, gameSession, InitialState } from '../../types/gameSession';

const initialState: InitialState = {
  deal: false,
};

export const gameSessionReducer = (state = initialState, action: changeDeal): InitialState => {
  const { type } = action;
  switch (type) {
    case gameSession.CHANGE_DEAL:
      return {
        ...state,
        deal: !state.deal,
      };
    default:
      return state;
  }
};
