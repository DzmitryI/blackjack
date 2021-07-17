import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconPrev, IconChip, IconNext } from '../icons';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { changeSizeBet } from '../../redux/actions/gameSessionActions';
import './chipsComponent.scss';

const ChipsComponent: FC = () => {
  const dispatch = useDispatch();
  const { chips } = useSelector((state: RootReducer) => state.casino);
  const { chosenBet } = useSelector((state: RootReducer) => state.gameSession);

  const onclickPrevBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(changeSizeBet({ chips, chosenBet, type: 'dec' }));
  }, [dispatch, chosenBet]);

  const onclickNextBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(changeSizeBet({ chips, chosenBet, type: 'inc' }));
  }, [dispatch, chosenBet]);

  const onClickChip: MouseEventHandler<HTMLButtonElement> = useCallback(({ currentTarget }) => {
    dispatch(changeSizeBet({ chips, chosenBet: +currentTarget.id }));
  }, [dispatch]);

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
          <button
            key={chip.value}
            id={`${chip.value}`}
            type="button"
            className="chip-block"
            onClick={onClickChip}
          >
            <IconChip
              fill={chip.color}
              width="40"
              height="40"
              className={chip.value === chosenBet ? 'active' : ''}
            />
            <span className="chip-title">{chip.value}</span>
          </button>
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
