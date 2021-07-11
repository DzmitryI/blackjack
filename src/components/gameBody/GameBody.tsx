import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BetComponent from '../betComponent';
import UserComponent from '../userComponent';
import DealerComponent from '../dealerComponent';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './gameBody.scss';
import IconWon from '../icons/IconWon';

const GameBody: FC = () => {
  const { userWon } = useSelector((state: RootReducer) => state.gameSession);
  const { bet } = useSelector((state: RootReducer) => state.user);
  return (
    <section className="game-body">
      <DealerComponent />
      <UserComponent />
      <BetComponent />
      {userWon && (
        <div className="won-block">
          <p className="won-title">YOU WON:</p>
          <div className="won-wrap">
            <IconWon />
            <span>{`$${bet}`}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default GameBody;
