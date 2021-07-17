import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import './infoBlock.scss';

const InfoBlock: FC = () => {
  const { minBet, maxBet } = useSelector((state: RootReducer) => state.casino);

  const renderUnit = (title: string, value: number) => (
    <div className="desc-block">
      <span>{`${title}:`}</span>
      <span>{`$${value}`}</span>
    </div>
  );

  return (
    <div className="info-block">
      {renderUnit('MIN', minBet)}
      {renderUnit('MAX', maxBet)}
    </div>
  );
};

export default InfoBlock;
