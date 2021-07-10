import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../../types/user';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './betComponent.scss';
import IconBack from '../icons/IconBack';
import IconClear from '../icons/IconClear';
import IconChip from '../icons/IconChip';

const BetComponent: FC = () => {
  const dispatch = useDispatch();
  const { bet } = useSelector((state: RootReducer) => state.user);
  const { dealStatus } = useSelector((state: RootReducer) => state.gameSession);
  const onClickDecreaseBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: user.DECREASE_BET,
    });
  }, [dispatch]);
  const onClickIncreaseBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: user.INCREASE_BET,
    });
  }, [dispatch]);
  const onClickClearBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: user.CLEAR_BET,
    });
  }, [dispatch]);
  return (
    <div className="bet-block">
      <div className="btn-container">
        {bet > 0 && !dealStatus && (
        <button type="button" onClick={onClickDecreaseBet} className="btn-decrease">
          <IconBack />
        </button>
        )}
        <button type="button" onClick={onClickIncreaseBet} className="btn-bet">
          {bet > 0 && (
          <div className="chip-block">
            <IconChip fill="black" width="50" height="50" />
            <span className="chip-title">{bet}</span>
          </div>
          )}
        </button>
        {bet > 0 && !dealStatus && (
          <button type="button" onClick={onClickClearBet} className="btn-increase">
            <IconClear />
          </button>
        )}
      </div>
    </div>
  );
};

export default BetComponent;
