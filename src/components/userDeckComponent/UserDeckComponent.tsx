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
import {
  Spider10,
  Spider2,
  Spider3,
  Spider4,
  Spider5,
  Spider6,
  Spider7,
  Spider8,
  Spider9, SpiderA,
  SpiderJ, SpiderK, SpiderQ,
} from '../icons/spaders';

const UserDeckComponent: FC = () => {
  const { userDeck, userPoints } = useSelector((state: RootReducer) => state.gameSession);
  console.log(userDeck, userPoints);
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
            case 'clubs2':
              return <Club2 key={name} />;
            case 'clubs3':
              return <Club3 key={name} />;
            case 'clubs4':
              return <Club4 key={name} />;
            case 'clubs5':
              return <Club5 key={name} />;
            case 'clubs6':
              return <Club6 key={name} />;
            case 'clubs7':
              return <Club7 key={name} />;
            case 'clubs8':
              return <Club8 key={name} />;
            case 'clubs9':
              return <Club9 key={name} />;
            case 'clubs10':
              return <Club10 key={name} />;
            case 'clubsJ':
              return <ClubJ key={name} />;
            case 'clubsQ':
              return <ClubQ key={name} />;
            case 'clubsK':
              return <ClubK key={name} />;
            case 'clubsA':
              return <ClubA key={name} />;
            case 'hearts2':
              return <Heart2 key={name} />;
            case 'hearts3':
              return <Heart3 key={name} />;
            case 'hearts4':
              return <Heart4 key={name} />;
            case 'hearts5':
              return <Heart5 key={name} />;
            case 'hearts6':
              return <Heart6 key={name} />;
            case 'hearts7':
              return <Heart7 key={name} />;
            case 'hearts8':
              return <Heart8 key={name} />;
            case 'hearts9':
              return <Heart9 key={name} />;
            case 'hearts10':
              return <Heart10 key={name} />;
            case 'heartsJ':
              return <HeartJ key={name} />;
            case 'heartsQ':
              return <HeartQ key={name} />;
            case 'heartsK':
              return <HeartK key={name} />;
            case 'heartsA':
              return <HeartA key={name} />;
            case 'spiders2':
              return <Spider2 key={name} />;
            case 'spiders3':
              return <Spider3 key={name} />;
            case 'spiders4':
              return <Spider4 key={name} />;
            case 'spiders5':
              return <Spider5 key={name} />;
            case 'spiders6':
              return <Spider6 key={name} />;
            case 'spiders7':
              return <Spider7 key={name} />;
            case 'spiders8':
              return <Spider8 key={name} />;
            case 'spiders9':
              return <Spider9 key={name} />;
            case 'spiders10':
              return <Spider10 key={name} />;
            case 'spidersJ':
              return <SpiderJ key={name} />;
            case 'spidersQ':
              return <SpiderQ key={name} />;
            case 'spidersK':
              return <SpiderK key={name} />;
            case 'spidersA':
              return <SpiderA key={name} />;
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};

export default UserDeckComponent;
