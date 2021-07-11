import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { GameSessionTypes } from '../../types/gameSession';
import './userComponent.scss';
import IconDeal from '../icons/IconDeal';
import { UserTypes } from '../../types/user';
import { shuffleDeck } from '../../redux/actions/casinoActions';
import UserDeckComponent from '../userDeckComponent';

const UserComponent: FC = () => {
  const dispatch = useDispatch();
  const { bet } = useSelector((state: RootReducer) => state.user);
  const { deck, maxCount } = useSelector((state: RootReducer) => state.casino);
  const { dealStatus, userPoints } = useSelector((state: RootReducer) => state.gameSession);
  const onClickHandleDeal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: GameSessionTypes.CHANGE_DEAL,
    });
    dispatch({
      type: UserTypes.DECREASE_CASH,
      payload: bet,
    });
    dispatch(shuffleDeck(deck));

    let curIndex = 0;
    const timerId = setInterval(() => {
      if (curIndex % 2 === 0) {
        dispatch({
          type: GameSessionTypes.CHANGE_USER_DECK,
          payload: deck[curIndex],
        });
      } else {
        dispatch({
          type: GameSessionTypes.CHANGE_DEALER_DECK,
          payload: deck[curIndex],
        });
      }
      curIndex += 1;
      if (curIndex === 4) {
        clearInterval(timerId);
      }
    }, 1000);
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
            <IconDeal fill={bet === 0 ? 'rgba(245, 84, 66, 0.3)' : 'black'} />
          </button>
        </div>
      ) : (
        <UserDeckComponent />
      )}
      {userPoints >= maxCount && <p className="cards-action-subtitle">BUST</p>}
    </div>
  );
};

export default UserComponent;
