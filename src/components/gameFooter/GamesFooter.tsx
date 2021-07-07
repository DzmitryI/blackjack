import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './gameFooter.scss';

const GamesFooter: FC = () => {
  const { cash } = useSelector((state: RootReducer) => state.user);
  return (
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
  );
};

export default GamesFooter;
