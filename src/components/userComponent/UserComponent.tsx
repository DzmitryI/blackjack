import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { GameSessionTypes } from '../../types/gameSession';
import { UserTypes } from '../../types/user';
import { shuffleDeck } from '../../redux/actions/casinoActions';
import { IconDeal } from '../icons';
import UserDeckComponent from '../userDeckComponent';
import './userComponent.scss';

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
    dispatch({
      type: GameSessionTypes.CHANGE_START_DEALING_CARDS,
    });
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
        dispatch({
          type: GameSessionTypes.CHANGE_START_DEALING_CARDS,
        });
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
            <IconDeal fill={bet === 0 ? 'rgba(0, 0, 0, 0.3)' : 'black'} />
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
