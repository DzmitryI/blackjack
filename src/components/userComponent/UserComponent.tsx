import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { IconDeal } from '../icons';
import UserDeckComponent from '../userDeckComponent';
import { startSession } from '../../redux/actions/gameSessionActions';
import './userComponent.scss';

const UserComponent: FC = () => {
  const dispatch = useDispatch();
  const { bet } = useSelector((state: RootReducer) => state.user);
  const { deck, maxCount } = useSelector((state: RootReducer) => state.casino);
  const { dealStatus, userPoints, dealerPoints } = useSelector((state: RootReducer) => state.gameSession);

  const onClickHandleDeal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(startSession({
      bet, deck, maxCount, userPoints, dealerPoints,
    }));
  }, [dispatch, bet, deck]);

  return (
    <div className="user-block">
      {!dealStatus ? (
        <div className="dealStatus-wrap">
          <button
            type="button"
            disabled={bet === 0}
            onClick={onClickHandleDeal}
            className="btn-deal"
          >
            <IconDeal fill={bet === 0 ? 'rgba(0, 0, 0, 0.3)' : 'black'} />
          </button>
        </div>
      ) : (
        <UserDeckComponent />
      )}
    </div>
  );
};

export default UserComponent;
