import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconPrev from '../icons/IconPrev';
import IconChip from '../icons/IconChip';
import IconNext from '../icons/IconNext';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { GameSessionTypes } from '../../types/gameSession';
import { changeChipSize } from '../helpers';
import './chipsComponent.scss';

const ChipsComponent: FC = () => {
  const dispatch = useDispatch();
  const { chips } = useSelector((state: RootReducer) => state.casino);
  const { chosenBet } = useSelector((state: RootReducer) => state.gameSession);

  const onclickPrevBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    const value = changeChipSize(chips, chosenBet, 'dec');
    dispatch({
      type: GameSessionTypes.CHANGE_SIZE_BET,
      payload: value,
    });
  }, [dispatch, chosenBet]);

  const onclickNextBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    const value = changeChipSize(chips, chosenBet, 'inc');
    dispatch({
      type: GameSessionTypes.CHANGE_SIZE_BET,
      payload: value,
    });
  }, [dispatch, chosenBet]);

  const onClickChip: MouseEventHandler<HTMLButtonElement> = useCallback(({ currentTarget }) => {
    dispatch({
      type: GameSessionTypes.CHANGE_SIZE_BET,
      payload: +currentTarget.id,
    });
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
