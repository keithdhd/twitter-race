import React from 'react';
import ReactDOM from 'react-dom';
import RaceContainer from './containers/RaceContainer';

window.onload = () => {
  ReactDOM.render(
    <RaceContainer />,
    document.getElementById('app')
  );
};