import React, { FC, MouseEventHandler, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../redux/reducers/rootReducer';
import { madeDeck } from '../../redux/actions/casinoActions';

const PreviewPage: FC = () => {
  const dispatch = useDispatch();
  const { values, suits } = useSelector((state: RootReducer) => state.casino);
  const onClickHandleStart: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(madeDeck({ values, suits }));
  }, [dispatch]);

  return (
    <div className="main">
      <h1>blackjack</h1>
      <button type="button" onClick={onClickHandleStart}>Start games</button>
    </div>
  );
};

export default PreviewPage;
