import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { gameSession } from '../../types/gameSession';
import './userComponent.scss';
import Shirt from '../icons/Shirt';
import {
  Diamonds10,
  Diamonds2,
  Diamonds3,
  Diamonds4,
  Diamonds5,
  Diamonds6,
  Diamonds7,
  Diamonds8,
  Diamonds9,
  DiamondsA,
  DiamondsJ,
  DiamondsK,
  DiamondsQ,
} from '../icons/diamonds';
import { Clubs2, Clubs3, Clubs4 } from '../icons/clubs';

const UserComponent: FC = () => {
  const { bet } = useSelector((state: RootReducer) => state.user);
  const { dealStatus, userPoints } = useSelector((state: RootReducer) => state.gameSession);
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
            <Shirt />
            <Clubs2 />
            <Clubs3 />
            <Clubs4 />
          </div>
        </>
      )}
    </div>
  );
};

export default UserComponent;
