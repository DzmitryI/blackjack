export enum OptionsTypes {
  MODAL_OPEN = 'MODAL_OPEN',
  MODAL_CLOSE = 'MODAL_CLOSE'
}

export type InitialState = {
  isOpen: boolean,
}

interface OpenModal {
  type: OptionsTypes.MODAL_OPEN;
}

interface CloseModal {
  type: OptionsTypes.MODAL_CLOSE;
}

export type OptionsAction = OpenModal | CloseModal;
