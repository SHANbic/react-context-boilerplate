import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider as JokeProvider} from "./context/JokeContext";
import './assets/styles/index.scss'


ReactDOM.render(
  <JokeProvider>
    <Routes />
  </JokeProvider>,
  document.getElementById('root')
);
