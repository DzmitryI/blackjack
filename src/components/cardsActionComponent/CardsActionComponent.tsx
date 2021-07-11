import React, { MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconAddCard from '../icons/IconAddCard';
import IconStopCard from '../icons/IconStopCard';
import { GameSessionTypes } from '../../types/gameSession';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './cardsActionComponent.scss';

const CardsActionComponent = () => {
  const dispatch = useDispatch();
  const { deck } = useSelector((state: RootReducer) => state.casino);
  const { idxDeck } = useSelector((state: RootReducer) => state.gameSession);

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
    console.log('add card');
  }, []);

  return (
    <div className="cards-action-wrap">
      <button type="button" onClick={onClickStopCard} className="btn-stop-card">
        <IconStopCard />
      </button>
      <button type="button" onClick={onClickAddCard} className="btn-add-card">
        <IconAddCard />
      </button>
    </div>
  );
};

export default CardsActionComponent;
