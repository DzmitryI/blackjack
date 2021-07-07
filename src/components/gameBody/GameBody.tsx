import React, { FC } from 'react';
import BetComponent from '../betComponent';
import UserComponent from '../userComponent';
import DealerComponent from '../dealerComponent';
import './gameBody.scss';

const GameBody: FC = () => (
  <section className="game-body">
    <DealerComponent />
    <UserComponent />
    <BetComponent />
  </section>
);

export default GameBody;
