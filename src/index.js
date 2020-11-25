import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './components/Header/Header'


ReactDOM.render(
  <Router history={history}>
      <Header/>
    <Switch>
      <Route exact path={"/ipm_project/"} component={App} />

    </Switch>
  </Router>,
document.getElementById('root')
);
