import React, { FC, MouseEventHandler, useCallback } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { ModalTypes } from '../../types/modal';
import './descPage.scss';

const DescPage: FC = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootReducer) => state.modal);
  const closeModal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: ModalTypes.MODAL_CLOSE,
    });
  }, [dispatch]);
  return (
    <Modal
      className="modal-page"
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className="desc-wrap">
        <div className="title-block">
          <h1>GAME RULES:</h1>
          <button type="button" className="btn-close" onClick={closeModal}>&#10006;</button>
        </div>
        <ul className="body-desc">
          <li>Blackjack is played with standard deck of 52 cards (Jokers not included)</li>
          <li>
            The object of the game is to create a hand with a value that is equal to or closer to 21 than
            dealer&apos;s hand without going over
            {' '}
          </li>
          <li>
            Number cars (2-10) count as face value, Aces count as either 11, and Kings, Queens, and Jacks count
            as 10
          </li>
          <li>No particular significance is given to any of the 4 suits.</li>
        </ul>
      </div>
    </Modal>
  );
};

export default DescPage;
