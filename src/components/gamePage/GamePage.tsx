import React, { FC, MouseEventHandler, useCallback } from 'react';

const GamePage: FC = () => {
  const onClickHandleDeal: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('deal');
  }, []);

  return (
    <div className="main">
      <button type="button" onClick={onClickHandleDeal}>Deal</button>
    </div>
  );
};

export default GamePage;
