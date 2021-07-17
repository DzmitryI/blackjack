import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { clearSessionResult } from '../../redux/actions/gameSessionActions';
import { UserStatus } from '../../types/gameSession';
import BetComponent from '../betComponent';
import UserComponent from '../userComponent';
import DealerComponent from '../dealerComponent';
import { IconStart, IconWon } from '../icons';
import './gameBody.scss';

const GameBody: FC = () => {
  const dispatch = useDispatch();
  const { userWon } = useSelector((state: RootReducer) => state.gameSession);
  const { bet } = useSelector((state: RootReducer) => state.user);

  useEffect(() => {
    if (userWon !== UserStatus.START) {
      dispatch(clearSessionResult());
    }
  }, [userWon]);

  return (
    <section className="game-body">
      <DealerComponent />
      <UserComponent />
      <BetComponent />
      {userWon !== UserStatus.START && (
        <div className="won-block">
          { userWon === UserStatus.WON && (<p className="won-title">YOU WON:</p>)}
          { userWon === UserStatus.BLACK_JACK && (<p className="won-title">BLACK JACK:</p>)}
          { userWon === UserStatus.LOSE && (<p className="won-title">no win</p>)}
          { userWon === UserStatus.TIE && (<p className="won-title">no one&apos;s won</p>)}
          { userWon === UserStatus.BUST && (<p className="won-title">BUST</p>)}
          <div className={`won-wrap ${userWon === UserStatus.BLACK_JACK ? 'black-jack-wrap' : ''}`}>
            { userWon === UserStatus.WON && (<IconWon />)}
            { userWon === UserStatus.WON && (<span>{`$${bet}`}</span>)}
            { userWon === UserStatus.BLACK_JACK && (<IconStart />)}
            { userWon === UserStatus.BLACK_JACK && (<span>{`$${bet * 2.5}`}</span>)}
          </div>
        </div>
      )}
    </section>
  );
};

export default GameBody;
