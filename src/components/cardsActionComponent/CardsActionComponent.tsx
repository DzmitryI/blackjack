import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameSessionTypes } from '../../types/gameSession';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { IconNewGame, IconAddCard, IconStopCard } from '../icons';
import { UserTypes } from '../../types/user';
import './cardsActionComponent.scss';

const CardsActionComponent: FC = () => {
  const dispatch = useDispatch();
  const { deck, maxCount } = useSelector((state: RootReducer) => state.casino);
  const { bet } = useSelector((state: RootReducer) => state.user);
  const {
    idxDeck, userPoints, dealerPoints, checkHands,
  } = useSelector((state: RootReducer) => state.gameSession);

  const onClickAddCard: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: GameSessionTypes.CHANGE_USER_DECK,
      payload: deck[idxDeck],
    });
    dispatch({
      type: GameSessionTypes.INCREASE_IDX_DECK,
    });
  }, [dispatch, idxDeck]);

  const onClickStopCard: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    const allDealerPoints = dealerPoints.reduce((acc, point) => acc + point, 0);
    dispatch({
      type: GameSessionTypes.CHECK_HANDS,
    });
    if (allDealerPoints < 17) {
      dispatch({
        type: GameSessionTypes.CHANGE_DEALER_DECK,
        payload: deck[idxDeck],
      });
      dispatch({
        type: GameSessionTypes.INCREASE_IDX_DECK,
      });
    }
    if (allDealerPoints > 21 || allDealerPoints < userPoints) {
      dispatch({
        type: GameSessionTypes.USER_WON,
      });
      dispatch({
        type: UserTypes.INCREASE_CASH,
        payload: bet * 2,
      });
    }
  }, [dispatch, dealerPoints, userPoints]);

  const onClickNewGame: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: GameSessionTypes.CLEAR_CUR_GAME,
    });
    dispatch({
      type: UserTypes.CLEAR_BET,
    });
  }, [dispatch]);

  return (
    <div className="cards-action-wrap">
      { userPoints < maxCount && !checkHands ? (
        <div className="action-wrap">
          <button type="button" onClick={onClickStopCard} className="btn-stop-card">
            <IconStopCard />
          </button>
          <button type="button" onClick={onClickAddCard} className="btn-add-card">
            <IconAddCard />
          </button>
        </div>
      )
        : (
          <button type="button" onClick={onClickNewGame} className="btn-new-game">
            <IconNewGame />
          </button>
        )}
    </div>
  );
};

export default CardsActionComponent;
