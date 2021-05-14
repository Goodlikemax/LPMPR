// You can choose your kind of history here (e.g. browserHistory)

import { Router} from 'react-router';
import { createBrowserHistory } from 'history'
import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//
//     <Router routes={routes} history={createBrowserHistory()}/>,
//     document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
