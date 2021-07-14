import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IconQuestion } from '../icons';
import { ModalTypes } from '../../types/modal';
import './optionsComponent.scss';

const OptionsComponent: FC = () => {
  const dispatch = useDispatch();
  const onClickDesc: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: ModalTypes.MODAL_OPEN,
    });
  }, [dispatch]);

  return (
    <div className="options-wrap">
      <button type="button" onClick={onClickDesc} className="btn-desc">
        <IconQuestion />
      </button>
    </div>
  );
};

export default OptionsComponent;
