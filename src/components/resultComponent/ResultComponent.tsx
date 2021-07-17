import React, { FC } from 'react';
import './resultComponent.scss';

interface ComponentProps {
  className: string;
  title: string;
  value: number;
}

const ResultComponent: FC<ComponentProps> = ({ className, title, value }) => (
  <div className={className}>
    <span>
      {`${title}:`}
    </span>
    <span>{`$${value}`}</span>
  </div>
);

export default ResultComponent;
