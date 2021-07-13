export enum ModalTypes {
  MODAL_OPEN = 'MODAL_OPEN',
  MODAL_CLOSE = 'MODAL_CLOSE'
}

export type InitialState = {
  isOpen: boolean,
}

interface OpenModal {
  type: ModalTypes.MODAL_OPEN;
}

interface CloseModal {
  type: ModalTypes.MODAL_CLOSE;
}

export type ModalAction = OpenModal | CloseModal;
