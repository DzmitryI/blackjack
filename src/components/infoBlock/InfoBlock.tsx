import React, { FC } from 'react';
import './infoBlock.scss';

const InfoBlock: FC = () => (
  <div className="info-block">
    <div className="desc-block">
      <span>MIN:</span>
      <span>$1.00</span>
    </div>
    <div className="desc-block">
      <span>MAX:</span>
      <span>$500.00</span>
    </div>
  </div>
);

export default InfoBlock;
