import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IconQuestion } from '../icons';
import { OptionsTypes } from '../../types/options';
import './optionsComponent.scss';

const OptionsComponent: FC = () => {
  const dispatch = useDispatch();
  const onClickDesc: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('options');
    dispatch({
      type: OptionsTypes.MODAL_OPEN,
    });
  }, [dispatch]);

  console.log('options');

  return (
    <div className="options-wrap">
      <button type="button" onClick={onClickDesc} className="btn-desc">
        <IconQuestion />
      </button>
    </div>
  );
};

export default OptionsComponent;
