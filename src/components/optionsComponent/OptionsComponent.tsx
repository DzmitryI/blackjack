import React, { FC, MouseEventHandler, useCallback } from 'react';
import IconQuestion from '../icons/IconQuestion';
import './optionsComponent.scss';

const OptionsComponent: FC = () => {
  const onClickDesc: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('options');
  }, []);

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
