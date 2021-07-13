import { InitialState, OptionsAction, OptionsTypes } from '../../types/options';

const initialState: InitialState = {
  isOpen: false,
};

export const optionsReducer = (state = initialState, action: OptionsAction): InitialState => {
  switch (action.type) {
    case OptionsTypes.MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case OptionsTypes.MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
