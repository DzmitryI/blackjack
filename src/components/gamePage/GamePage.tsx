import React, { FC, MouseEventHandler, useCallback } from 'react';
import './gamePage.scss';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import GamesFooter from '../gameFooter/GamesFooter';
import GameBody from '../gameBody';

const GamePage: FC = () => {
  const { cash } = useSelector((state: RootReducer) => state.user);

  return (
    <div className="main game-wrap">
      <GameBody />
      <GamesFooter />
    </div>
  );
};

export default GamePage;
