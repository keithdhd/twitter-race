import React from 'react';
import ReactDOM from 'react-dom';
import RaceContainer from './containers/RaceContainer';
require('./main.css')
require('bulma')

window.onload = () => {
  ReactDOM.render(
    <RaceContainer />,
    document.getElementById('app')
  );
};