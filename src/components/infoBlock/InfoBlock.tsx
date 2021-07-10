import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './infoBlock.scss';

const InfoBlock: FC = () => {
  const { minBet, maxBet } = useSelector((state: RootReducer) => state.casino);
  return (
    <div className="info-block">
      <div className="desc-block">
        <span>MIN:</span>
        <span>{`$${minBet}`}</span>
      </div>
      <div className="desc-block">
        <span>MAX:</span>
        <span>{`$${maxBet}`}</span>
      </div>
    </div>
  );
};

export default InfoBlock;
