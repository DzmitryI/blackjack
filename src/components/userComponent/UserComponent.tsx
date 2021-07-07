import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { gameSession } from '../../types/gameSession';
import './userComponent.scss';

const UserComponent: FC = () => {
  const { bet } = useSelector((state: RootReducer) => state.user);
  const { dealStatus, dealerPoints, userPoints } = useSelector((state: RootReducer) => state.gameSession);
  const dispatch = useDispatch();
  const onClickHandleDeal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: gameSession.CHANGE_DEAL,
    });
  }, [dispatch]);
  return (
    <div className="user-block">
      {!dealStatus ? (
        <div className="dealStatus-wrap">
          <button type="button" disabled={bet === 0} onClick={onClickHandleDeal}>Deal</button>
        </div>
      ) : (
        <>
          <p className="user-count">{userPoints}</p>
          <div className="user-card-wrap">
            <div className="user-card user-card1" />
            <div className="user-card user-card2" />
            <div className="user-card user-card3" />
            <div className="user-card user-card4" />
          </div>
        </>
      )}
    </div>
  );
};

export default UserComponent;
