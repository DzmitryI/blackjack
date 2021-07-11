import React, { MouseEventHandler, useCallback } from 'react';
import IconAddCard from '../icons/IconAddCard';
import IconStopCard from '../icons/IconStopCard';
import './cardsActionComponent.scss';

const CardsActionComponent = () => {
  const onClickAddCard: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('add card');
  }, []);

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
