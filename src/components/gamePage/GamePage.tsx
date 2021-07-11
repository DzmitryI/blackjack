import React, { FC } from 'react';
import GamesFooter from '../gameFooter/GamesFooter';
import GameBody from '../gameBody';
import './gamePage.scss';

const GamePage: FC = () => (
  <div className="main game-wrap">
    <GameBody />
    <GamesFooter />
  </div>
);

export default GamePage;
