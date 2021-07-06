import React, { FC, MouseEventHandler, useCallback } from 'react';
import './gamePage.scss';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';

const GamePage: FC = () => {
  const { cash } = useSelector((state: RootReducer) => state.user);
  const onClickHandleDeal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('deal');
  }, []);

  return (
    <div className="main game-wrap">
      <section className="game-element">
        <button type="button" onClick={onClickHandleDeal}>Deal</button>

      </section>
      <section className="game-footer">
        <div className="desc-wrap">
          <div className="desc-block">
            <span>MIN:</span>
            <span>$1.00</span>
          </div>
          <div className="desc-block">
            <span>MAX:</span>
            <span>$500.00</span>
          </div>
        </div>
        <div className="result-wrap">
          <div className="result-block">
            <span>Cash:</span>
            <span>{`$${cash}`}</span>
          </div>
          <div className="result-block">
            <span>Bet:</span>
            <span>$0</span>
          </div>
          <div className="result-block">
            <span>Win:</span>
            <span>$0</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamePage;
