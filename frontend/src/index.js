import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Free from './components/roomin/Free'
import Basic from './components/roomin/Basic'
import Duet from './components/roomin/Duet'
import Solo from './components/roomin/Solo'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Basic/>
  </React.StrictMode>,
  document.getElementById('root')
);

