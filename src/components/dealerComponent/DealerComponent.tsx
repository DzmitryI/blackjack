import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './dealerComponent.scss';
import IconShirt from '../icons/IconShirt';
import Diamond2 from '../icons/diamonds/Diamond2';
import {
  Diamond10,
  Diamond3,
  Diamond4,
  Diamond5,
  Diamond6,
  Diamond7,
  Diamond8,
  Diamond9, DiamondA,
  DiamondJ, DiamondK, DiamondQ,
} from '../icons/diamonds';
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
  Spade10,
  Spade2,
  Spade3,
  Spade4,
  Spade5,
  Spade6,
  Spade7,
  Spade8,
  Spade9, SpadeA,
  SpadeJ, SpadeK,
  SpadeQ,
} from '../icons/spaders';
import ChipsComponent from '../сhipsComponent';

const renderCard = (name: string) => {
  switch (name) {
    case 'diamonds2':
      return <Diamond2 key={name} width="66" height="99" />;
    case 'diamonds3':
      return <Diamond3 key={name} width="66" height="99" />;
    case 'diamonds4':
      return <Diamond4 key={name} width="66" height="99" />;
    case 'diamonds5':
      return <Diamond5 key={name} width="66" height="99" />;
    case 'diamonds6':
      return <Diamond6 key={name} width="66" height="99" />;
    case 'diamonds7':
      return <Diamond7 key={name} width="66" height="99" />;
    case 'diamonds8':
      return <Diamond8 key={name} width="66" height="99" />;
    case 'diamonds9':
      return <Diamond9 key={name} width="66" height="99" />;
    case 'diamonds10':
      return <Diamond10 key={name} width="66" height="99" />;
    case 'diamondsJ':
      return <DiamondJ key={name} width="66" height="99" />;
    case 'diamondsQ':
      return <DiamondQ key={name} width="66" height="99" />;
    case 'diamondsK':
      return <DiamondK key={name} width="66" height="99" />;
    case 'diamondsA':
      return <DiamondA key={name} width="66" height="99" />;
    case 'clubs2':
      return <Club2 key={name} width="66" height="99" />;
    case 'clubs3':
      return <Club3 key={name} width="66" height="99" />;
    case 'clubs4':
      return <Club4 key={name} width="66" height="99" />;
    case 'clubs5':
      return <Club5 key={name} width="66" height="99" />;
    case 'clubs6':
      return <Club6 key={name} width="66" height="99" />;
    case 'clubs7':
      return <Club7 key={name} width="66" height="99" />;
    case 'clubs8':
      return <Club8 key={name} width="66" height="99" />;
    case 'clubs9':
      return <Club9 key={name} width="66" height="99" />;
    case 'clubs10':
      return <Club10 key={name} width="66" height="99" />;
    case 'clubsJ':
      return <ClubJ key={name} width="66" height="99" />;
    case 'clubsQ':
      return <ClubQ key={name} width="66" height="99" />;
    case 'clubsK':
      return <ClubK key={name} width="66" height="99" />;
    case 'clubsA':
      return <ClubA key={name} width="66" height="99" />;
    case 'hearts2':
      return <Heart2 key={name} width="66" height="99" />;
    case 'hearts3':
      return <Heart3 key={name} width="66" height="99" />;
    case 'hearts4':
      return <Heart4 key={name} width="66" height="99" />;
    case 'hearts5':
      return <Heart5 key={name} width="66" height="99" />;
    case 'hearts6':
      return <Heart6 key={name} width="66" height="99" />;
    case 'hearts7':
      return <Heart7 key={name} width="66" height="99" />;
    case 'hearts8':
      return <Heart8 key={name} width="66" height="99" />;
    case 'hearts9':
      return <Heart9 key={name} width="66" height="99" />;
    case 'hearts10':
      return <Heart10 key={name} width="66" height="99" />;
    case 'heartsJ':
      return <HeartJ key={name} width="66" height="99" />;
    case 'heartsQ':
      return <HeartQ key={name} width="66" height="99" />;
    case 'heartsK':
      return <HeartK key={name} width="66" height="99" />;
    case 'heartsA':
      return <HeartA key={name} width="66" height="99" />;
    case 'spades2':
      return <Spade2 key={name} width="66" height="99" />;
    case 'spades3':
      return <Spade3 key={name} width="66" height="99" />;
    case 'spades4':
      return <Spade4 key={name} width="66" height="99" />;
    case 'spades5':
      return <Spade5 key={name} width="66" height="99" />;
    case 'spades6':
      return <Spade6 key={name} width="66" height="99" />;
    case 'spades7':
      return <Spade7 key={name} width="66" height="99" />;
    case 'spades8':
      return <Spade8 key={name} width="66" height="99" />;
    case 'spades9':
      return <Spade9 key={name} width="66" height="99" />;
    case 'spades10':
      return <Spade10 key={name} width="66" height="99" />;
    case 'spadesJ':
      return <SpadeJ key={name} width="66" height="99" />;
    case 'spadesQ':
      return <SpadeQ key={name} width="66" height="99" />;
    case 'spadesK':
      return <SpadeK key={name} width="66" height="99" />;
    case 'spadesA':
      return <SpadeA key={name} width="66" height="99" />;
    default:
      return null;
  }
};

const DealerComponent: FC = () => {
  const {
    dealStatus, dealerPoints, dealerDeck, checkHands,
  } = useSelector((state: RootReducer) => state.gameSession);
  return (
    <div className="dealer-block">
      {dealStatus && (
      <>
        {dealerDeck.length > 0
        && (
        <p className="dealer-count">
          {!checkHands ? dealerPoints[0] : dealerPoints.reduce((acc, point) => acc + point, 0)}
        </p>
        )}
        <div className="dealer-card-wrap">
          {dealerDeck.map((card, index) => {
            const name = card.suit + card.value;
            if (!checkHands) {
              if (index === 0) {
                return renderCard(name);
              }
            } else {
              return renderCard(name);
            }
            return null;
          })}
          {dealerDeck.length > 1 && !checkHands && (<IconShirt width="66" height="99" />)}
        </div>
      </>
      )}
    </div>
  );
};

export default DealerComponent;
