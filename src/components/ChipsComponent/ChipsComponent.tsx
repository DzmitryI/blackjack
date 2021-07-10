import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useSelector } from 'react-redux';
import IconPrev from '../icons/IconPrev';
import IconChip from '../icons/IconChip';
import IconNext from '../icons/IconNext';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './chipsComponent.scss';

const ChipsComponent: FC = () => {
  const { chips } = useSelector((state: RootReducer) => state.casino);
  const { chosenBet } = useSelector((state: RootReducer) => state.gameSession);
  const onclickPrevBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    // dispatch({
    //   type: user.CLEAR_BET,
    // });
    console.log('click');
  }, []);
  const onclickNextBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    // dispatch({
    //   type: user.CLEAR_BET,
    // });
    console.log('click');
  }, []);
  return (
    <>
      <div className="btn-prev-wrap">
        <button
          type="button"
          className="btn-prev"
          onClick={onclickPrevBet}
        >
          <IconPrev />
        </button>
      </div>
      <div className="chips-container">
        {chips && chips.map((chip) => (
          <div className="chip-block" key={chip.value}>
            <IconChip
              fill={chip.color}
              width="40"
              height="40"
              className={chip.value === chosenBet ? 'active' : ''}
            />
            <span className="chip-title">{chip.value}</span>
          </div>
        ))}
      </div>
      <div className="btn-next-wrap">
        <button
          type="button"
          className="btn-next"
          onClick={onclickNextBet}
        >
          <IconNext />
        </button>
      </div>
    </>
  );
};

export default ChipsComponent;
