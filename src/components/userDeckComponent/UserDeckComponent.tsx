import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import {
  Diamond10,
  Diamond2,
  Diamond3,
  Diamond4,
  Diamond5,
  Diamond6,
  Diamond7,
  Diamond8,
  Diamond9, DiamondA, DiamondJ, DiamondK, DiamondQ,
} from '../icons/diamonds';
import './userDeckComponent.scss';
import {
  Club10,
  Club2,
  Club3,
  Club4,
  Club5,
  Club6,
  Club7,
  Club8,
  Club9,
  ClubA,
  ClubJ,
  ClubK,
  ClubQ,
} from '../icons/clubs';
import {
  Heart10,
  Heart2,
  Heart3,
  Heart4,
  Heart5,
  Heart6,
  Heart7,
  Heart8,
  Heart9, HeartA,
  HeartJ,
  HeartK,
  HeartQ,
} from '../icons/hearts';

const UserDeckComponent: FC = () => {
  const { userDeck, userPoints } = useSelector((state: RootReducer) => state.gameSession);
  return (
    <>
      <p className="user-count">{userPoints}</p>
      <div className="user-card-wrap">
        {userDeck.map((card) => {
          const name = card.suit + card.value;
          switch (name) {
            case 'diamonds2':
              return <Diamond2 key={name} />;
            case 'diamonds3':
              return <Diamond3 key={name} />;
            case 'diamonds4':
              return <Diamond4 key={name} />;
            case 'diamonds5':
              return <Diamond5 key={name} />;
            case 'diamonds6':
              return <Diamond6 key={name} />;
            case 'diamonds7':
              return <Diamond7 key={name} />;
            case 'diamonds8':
              return <Diamond8 key={name} />;
            case 'diamonds9':
              return <Diamond9 key={name} />;
            case 'diamonds10':
              return <Diamond10 key={name} />;
            case 'diamondsJ':
              return <DiamondJ key={name} />;
            case 'diamondsQ':
              return <DiamondQ key={name} />;
            case 'diamondsK':
              return <DiamondK key={name} />;
            case 'diamondsA':
              return <DiamondA key={name} />;
            case 'club2':
              return <Club2 key={name} />;
            case 'club3':
              return <Club3 key={name} />;
            case 'club4':
              return <Club4 key={name} />;
            case 'club5':
              return <Club5 key={name} />;
            case 'club6':
              return <Club6 key={name} />;
            case 'club7':
              return <Club7 key={name} />;
            case 'club8':
              return <Club8 key={name} />;
            case 'club9':
              return <Club9 key={name} />;
            case 'club10':
              return <Club10 key={name} />;
            case 'clubJ':
              return <ClubJ key={name} />;
            case 'clubQ':
              return <ClubQ key={name} />;
            case 'clubK':
              return <ClubK key={name} />;
            case 'clubA':
              return <ClubA key={name} />;
            case 'heart2':
              return <Heart2 key={name} />;
            case 'heart3':
              return <Heart3 key={name} />;
            case 'heart4':
              return <Heart4 key={name} />;
            case 'heart5':
              return <Heart5 key={name} />;
            case 'heart6':
              return <Heart6 key={name} />;
            case 'heart7':
              return <Heart7 key={name} />;
            case 'heart8':
              return <Heart8 key={name} />;
            case 'heart9':
              return <Heart9 key={name} />;
            case 'heart10':
              return <Heart10 key={name} />;
            case 'heartJ':
              return <HeartJ key={name} />;
            case 'heartQ':
              return <HeartQ key={name} />;
            case 'heartK':
              return <HeartK key={name} />;
            case 'heartA':
              return <HeartA key={name} />;
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};

export default UserDeckComponent;
