import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './gameFooter.scss';
import InfoBlock from '../infoBlock';
import ChipsComponent from '../сhipsComponent';
import CardsActionComponent from '../cardsActionComponent';

const GamesFooter: FC = () => {
  const { cash, bet } = useSelector((state: RootReducer) => state.user);
  const { dealStatus } = useSelector((state: RootReducer) => state.gameSession);

  return (
    <section className="game-footer">
      <div className="desc-wrap">
        <InfoBlock />
        {!dealStatus ? (<ChipsComponent />) : (<CardsActionComponent />)}

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
