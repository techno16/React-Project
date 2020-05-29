import React from 'react';
import ReactDOM from 'react-dom';
import Explain from './Explain';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
import PalaceList from './PalaceList';




ReactDOM.render(
  <React.StrictMode>
    <Main />
    <Explain />
    <PalaceList/>
  </React.StrictMode>,
  document.getElementById('root')
);


