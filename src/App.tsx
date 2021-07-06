import React from 'react';
import './app.scss';
import { useSelector } from 'react-redux';
import { RootReducer } from './redux/reducers/rootReducer';
import PreviewPage from './components/previewPage';
import GamePage from './components/gamePage';

function App() {
  const { isPreview } = useSelector((state: RootReducer) => state.casino);

  return (
    <div className="app">
      {isPreview ? (<PreviewPage />) : (<GamePage />)}
    </div>
  );
}

export default App;
