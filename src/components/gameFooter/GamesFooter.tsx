import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import InfoBlock from '../infoBlock';
import ChipsComponent from '../сhipsComponent';
import CardsActionComponent from '../cardsActionComponent';
import './gameFooter.scss';
import OptionsComponent from '../optionsComponent';

const GamesFooter: FC = () => {
  const { cash, bet } = useSelector((state: RootReducer) => state.user);
  const { dealStatus, userWon } = useSelector((state: RootReducer) => state.gameSession);

  return (
    <section className="game-footer">
      <div className="desc-wrap">
        <InfoBlock />
        {!dealStatus ? (<ChipsComponent />) : (<CardsActionComponent />)}
      </div>
      <div className="result-wrap">
        <div className="cash-block">
          <span>Cash:</span>
          <span>{`$${cash}`}</span>
        </div>
        <div className="result-block">
          <span>Bet:</span>
          <span>{`$${bet}`}</span>
        </div>
        <div className="result-block">
          <span>Win:</span>
          <span>{`$${userWon ? bet : 0}`}</span>
        </div>
        <OptionsComponent />
      </div>
    </section>
  );
};

export default GamesFooter;
