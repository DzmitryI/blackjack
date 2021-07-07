import React, { FC, MouseEventHandler, useCallback } from 'react';
import './gameBody.scss';

const GameBody: FC = () => {
  const onClickHandleDeal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('deal');
  }, []);
  return (
    <section className="game-body">

      <div className="dealer-block">
        <span className="dealer-count">count</span>
        <div className="dealer-card-wrap">
          <div className="dealer-card dealer-card1" />
          <div className="dealer-card dealer-card2" />
          <div className="dealer-card dealer-card3" />
          <div className="dealer-card dealer-card4" />
        </div>
      </div>
      <div className="user-block">
        <span className="user-count">count</span>
        <div className="user-card-wrap">
          <div className="user-card user-card1" />
          <div className="user-card user-card2" />
          <div className="user-card user-card3" />
          <div className="user-card user-card4" />
        </div>
      </div>
      <div className="bank-block">
        <button type="button" onClick={onClickHandleDeal}>Deal</button>
        <div>bank</div>
      </div>

    </section>
  );
};

export default GameBody;
