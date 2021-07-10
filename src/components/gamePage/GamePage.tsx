import React, { FC } from 'react';
import './gamePage.scss';
import GamesFooter from '../gameFooter/GamesFooter';
import GameBody from '../gameBody';

const GamePage: FC = () => (
  <div className="main game-wrap">
    <GameBody />
    <GamesFooter />
  </div>
);

export default GamePage;
