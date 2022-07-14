import React from 'react';
import GlobalState from './src/GlobalState/GlobalState';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <GlobalState>
      <Router/>
      </GlobalState>
  );
};


export default App;
