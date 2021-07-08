import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './gameFooter.scss';
import Chip from '../icons/Chip';

const GamesFooter: FC = () => {
  const { cash, bet } = useSelector((state: RootReducer) => state.user);
  const { chips } = useSelector((state: RootReducer) => state.casino);
  console.log(chips);
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
          {chips && chips.map((chip) => (
            <div className="chip-block" key={chip.value}>
              <Chip fill={chip.color} width="40" height="40" className="active" />
              <span className="chip-title">{chip.value}</span>
            </div>
          ))}
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
