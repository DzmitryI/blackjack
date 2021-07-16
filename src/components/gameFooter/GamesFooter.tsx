import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import InfoBlock from '../infoBlock';
import ChipsComponent from '../сhipsComponent';
import CardsActionComponent from '../cardsActionComponent';
import OptionsComponent from '../optionsComponent';
import ResultComponent from '../resultComponent';
import { UserStatus } from '../../types/gameSession';
import './gameFooter.scss';

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
        <ResultComponent className="cash-block" title="Cash" value={cash} />
        <ResultComponent className="result-block" title="Bet" value={bet} />
        <ResultComponent className="result-block" title="Win" value={userWon === UserStatus.WON ? bet : 0} />
        <OptionsComponent />
      </div>
    </section>
  );
};

export default GamesFooter;
