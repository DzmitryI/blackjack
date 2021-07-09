import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './dealerComponent.scss';
import IconShirt from '../icons/IconShirt';
import Diamonds2 from '../icons/diamonds/Diamonds2';

const DealerComponent: FC = () => {
  const { dealStatus, dealerPoints } = useSelector((state: RootReducer) => state.gameSession);
  return (
    <div className="dealer-block">
      {dealStatus && (
      <>
        <p className="dealer-count">{dealerPoints}</p>
        <div className="dealer-card-wrap">
          <IconShirt width="66" height="99" />
          <Diamonds2 width="66" height="99" />
          {/* <div className="dealer-card dealer-card1" /> */}
          {/* <div className="dealer-card dealer-card2" /> */}
          {/* <div className="dealer-card dealer-card3" /> */}
          {/* <div className="dealer-card dealer-card4" /> */}
        </div>
      </>
      )}
    </div>
  );
};

export default DealerComponent;
