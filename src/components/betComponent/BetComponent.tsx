import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../../types/user';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './betComponent.scss';

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
      <div>
        {bet > 0 && !dealStatus && (<button type="button" onClick={onClickDecreaseBet}>decrease</button>)}
        <button type="button" onClick={onClickIncreaseBet}>Bet</button>
        {bet > 0 && !dealStatus && (<button type="button" onClick={onClickClearBet}>clear</button>)}
      </div>
      <p className="bet-count">{bet}</p>
    </div>
  );
};

export default BetComponent;
