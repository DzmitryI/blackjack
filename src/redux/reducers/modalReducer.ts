import { InitialState, ModalAction, ModalTypes } from '../../types/modal';

export const initialState: InitialState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action: ModalAction): InitialState => {
  switch (action.type) {
    case ModalTypes.MODAL_OPEN:
      return {
        isOpen: true,
      };
    case ModalTypes.MODAL_CLOSE:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};
