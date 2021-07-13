import { InitialState, ModalAction, ModalTypes } from '../../types/modal';

const initialState: InitialState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action: ModalAction): InitialState => {
  switch (action.type) {
    case ModalTypes.MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case ModalTypes.MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
