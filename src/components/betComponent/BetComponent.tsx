import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserTypes } from '../../types/user';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { IconBack, IconClear, IconChip } from '../icons';
import './betComponent.scss';

const BetComponent: FC = () => {
  const dispatch = useDispatch();
  const { maxBet } = useSelector((state: RootReducer) => state.casino);
  const { bet } = useSelector((state: RootReducer) => state.user);
  const { dealStatus, chosenBet } = useSelector((state: RootReducer) => state.gameSession);
  const onClickDecreaseBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    let decreaseSize: number | null = null;
    if (chosenBet > bet) {
      decreaseSize = bet;
    } else {
      decreaseSize = chosenBet;
    }
    dispatch({
      type: UserTypes.DECREASE_BET,
      payload: decreaseSize,
    });
  }, [dispatch, chosenBet, bet]);

  const onClickIncreaseBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    let increaseSize = chosenBet;
    if (bet + chosenBet > maxBet) {
      increaseSize = maxBet - bet;
    }
    dispatch({
      type: UserTypes.INCREASE_BET,
      payload: increaseSize,
    });
  }, [dispatch, chosenBet, bet]);

  const onClickClearBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: UserTypes.CLEAR_BET,
    });
  }, [dispatch]);
  return (
    <div className="bet-block">
      <div className="btn-container">
        {bet > 0 && !dealStatus && (
        <button
          type="button"
          onClick={onClickDecreaseBet}
          className="btn-decrease"
        >
          <IconBack />
        </button>
        )}
        <button
          type="button"
          onClick={onClickIncreaseBet}
          className="btn-bet"
          disabled={dealStatus}
        >
          {bet > 0 && (
            <>
              <IconChip fill="black" width="50" height="50" />
              <span className="chip-title">{bet}</span>
            </>
          )}
        </button>
        {bet > 0 && !dealStatus && (
          <button type="button" onClick={onClickClearBet} className="btn-increase">
            <IconClear />
          </button>
        )}
      </div>
      <IconChip fill="gold" width="15" height="15" className="blackJack0" />
      <IconChip fill="blue" width="15" height="15" className="blackJack1" />
      <IconChip fill="yellow" width="15" height="15" className="blackJack2" />
    </div>
  );
};

export default BetComponent;
