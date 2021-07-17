import React, {
  FC, MouseEventHandler, useCallback, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameSessionTypes } from '../../types/gameSession';
import { UserTypes } from '../../types/user';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { checkSessionResult, sessionResult } from '../../redux/actions/gameSessionActions';
import { IconNewGame, IconAddCard, IconStopCard } from '../icons';
import './cardsActionComponent.scss';

const CardsActionComponent: FC = () => {
  const dispatch = useDispatch();
  const { deck, maxCount } = useSelector((state: RootReducer) => state.casino);
  const { bet } = useSelector((state: RootReducer) => state.user);
  const {
    idxDeck, userPoints, dealerPoints, checkHands, startDealingCards,
  } = useSelector((state: RootReducer) => state.gameSession);

  useEffect(() => {
    if (checkHands || userPoints >= maxCount) {
      dispatch(sessionResult({
        dealerPoints, userPoints, maxCount, bet,
      }));
    }
  }, [dealerPoints, checkHands, maxCount, userPoints]);

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
    dispatch(checkSessionResult({ dealerPoints, deck, idxDeck }));
  }, [dispatch, dealerPoints]);

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
          <button type="button" disabled={startDealingCards} onClick={onClickStopCard} className="btn-stop-card">
            <IconStopCard />
          </button>
          <button type="button" disabled={startDealingCards} onClick={onClickAddCard} className="btn-add-card">
            <IconAddCard />
          </button>
        </div>
      ) : (
        <button type="button" onClick={onClickNewGame} className="btn-new-game">
          <IconNewGame />
        </button>
      )}
    </div>
  );
};

export default CardsActionComponent;
