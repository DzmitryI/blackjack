import React, { FC, MouseEventHandler, useCallback } from 'react';
import './gameBody.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { user } from '../../types/user';
import { gameSession } from '../../types/gameSession';

const GameBody: FC = () => {
  const { bet } = useSelector((state: RootReducer) => state.user);
  const { deal } = useSelector((state: RootReducer) => state.gameSession);
  const dispatch = useDispatch();
  const onClickHandleDeal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('deal');
    dispatch({
      type: gameSession.CHANGE_DEAL,
    });
  }, [dispatch]);
  const onClickDecreaseBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('decrease');
    dispatch({
      type: user.DECREASE_BET,
    });
  }, [dispatch]);
  const onClickIncreaseBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('increase');
    dispatch({
      type: user.INCREASE_BET,
    });
  }, [dispatch]);
  const onClickClearBet: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('clear');
    dispatch({
      type: user.CLEAR_BET,
    });
  }, [dispatch]);

  return (
    <section className="game-body">
      <div className="dealer-block">
        {deal && (
          <>
            <p className="dealer-count">count</p>
            <div className="dealer-card-wrap">
              <div className="dealer-card dealer-card1" />
              <div className="dealer-card dealer-card2" />
              <div className="dealer-card dealer-card3" />
              <div className="dealer-card dealer-card4" />
            </div>
          </>
        )}
      </div>
      <div className="user-block">
        {!deal ? (
          <div className="deal-wrap">
            <button type="button" onClick={onClickHandleDeal}>Deal</button>
          </div>
        )
          : (
            <>
              <p className="user-count">count</p>
              <div className="user-card-wrap">
                <div className="user-card user-card1" />
                <div className="user-card user-card2" />
                <div className="user-card user-card3" />
                <div className="user-card user-card4" />
              </div>
            </>
          )}
      </div>
      <div className="bank-block">
        <div>
          {bet > 0 && (<button type="button" onClick={onClickDecreaseBet}>decrease</button>)}
          <button type="button" onClick={onClickIncreaseBet}>Bet</button>
          {bet > 0 && (<button type="button" onClick={onClickClearBet}>clear</button>)}
        </div>
        <p className="bank-count">{bet}</p>
      </div>

    </section>
  );
};

export default GameBody;
