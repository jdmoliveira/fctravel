import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './components/Header/Header'
import Homepage from './components/Homepage'
import Map from './components/Map'


ReactDOM.render(
  <Router history={history}>
      <Header/>
    <Switch>
      <Route exact path={"/ipm_project/"} component={Homepage} />
      <Route path={"/ipm_project/map"} component={Map} />
    </Switch>
  </Router>,
document.getElementById('root')
);
