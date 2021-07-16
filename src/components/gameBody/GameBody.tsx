import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BetComponent from '../betComponent';
import UserComponent from '../userComponent';
import DealerComponent from '../dealerComponent';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { GameSessionTypes, UserStatus } from '../../types/gameSession';
import { UserTypes } from '../../types/user';
import { IconWon } from '../icons';
import './gameBody.scss';

const GameBody: FC = () => {
  let timerID: NodeJS.Timeout;
  const dispatch = useDispatch();
  const { userWon } = useSelector((state: RootReducer) => state.gameSession);
  const { bet } = useSelector((state: RootReducer) => state.user);

  useEffect(() => {
    if (userWon !== UserStatus.START) {
      timerID = setTimeout(() => {
        dispatch({
          type: GameSessionTypes.CLEAR_CUR_GAME,
        });
        dispatch({
          type: UserTypes.CLEAR_BET,
        });
      }, 4000);
    }
  }, [userWon]);

  useEffect(() => {
    clearTimeout(timerID);
  }, []);

  return (
    <section className="game-body">
      <DealerComponent />
      <UserComponent />
      <BetComponent />
      {userWon !== UserStatus.START && (
        <div className="won-block">
          { userWon === UserStatus.WON && (<p className="won-title">YOU WON:</p>)}
          { userWon === UserStatus.LOSE && (<p className="won-title">no win</p>)}
          { userWon === UserStatus.TIE && (<p className="won-title">no one&apos;s won</p>)}
          { userWon === UserStatus.BUST && (<p className="won-title">BUST</p>)}
          <div className="won-wrap">
            { userWon === UserStatus.WON && (<IconWon />)}
            { userWon === UserStatus.WON && (<span>{`$${bet}`}</span>)}
          </div>
        </div>
      )}
    </section>
  );
};

export default GameBody;
