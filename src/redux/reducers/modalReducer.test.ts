import { modalReducer, initialState } from './modalReducer';
import { ModalTypes } from '../../types/modal';

describe('modal reducer', () => {
  it('MODAL OPEN', () => {
    const action = {
      type: ModalTypes.MODAL_OPEN,
    };
    expect(modalReducer(initialState, action)).toEqual({
      isOpen: true,
    });
  });

  it('MODAL CLOSE', () => {
    const action = {
      type: ModalTypes.MODAL_CLOSE,
    };
    expect(modalReducer(initialState, action)).toEqual({
      isOpen: false,
    });
  });
});
