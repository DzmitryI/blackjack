import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './gameFooter.scss';
import Chip1 from '../icons/Chip1';
import Chip5 from '../icons/Chip5';
import Chip10 from '../icons/Chip10';
import Chip50 from '../icons/Chip50';
import Chip100 from '../icons/Chip100';
import Chip500 from '../icons/Chip500';

const GamesFooter: FC = () => {
  const { cash, bet } = useSelector((state: RootReducer) => state.user);
  return (
    <section className="game-footer">
      <div className="desc-wrap">
        <div className="info-block">
          <div className="desc-block">
            <span>MIN:</span>
            <span>$1.00</span>
          </div>
          <div className="desc-block">
            <span>MAX:</span>
            <span>$500.00</span>
          </div>
        </div>
        <div className="chips-container">
          <Chip1 width="40" height="40" />
          <Chip5 width="40" height="40" />
          <Chip10 width="40" height="40" />
          <Chip50 width="40" height="40" />
          <Chip100 width="40" height="40" />
          <Chip500 width="40" height="40" />
        </div>
      </div>
      <div className="result-wrap">
        <div className="result-block">
          <span>Cash:</span>
          <span>{`$${cash}`}</span>
        </div>
        <div className="result-block">
          <span>Bet:</span>
          <span>{`$${bet}`}</span>
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
