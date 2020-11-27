import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './components/Header/Header'
import Homepage from './components/Homepage'

import Profile from "./components/Header/Profile/Profile";
import Map from './components/Map'
import Find from './components/Find'



ReactDOM.render(
  <Router history={history}>
      <Header/>
    <Switch>
        <Route exact path={"/ipm_project/"} component={Homepage} />
        <Route exact path={"/ipm_project/timetables/"} component={Homepage} />
        <Route exact path={"/ipm_project/profile/"} component={Profile} />
        <Route exact path={"/ipm_project/map"} component={Map} />
        <Route exact path={"/ipm_project/find"} component={Find} />
    </Switch>
  </Router>,
document.getElementById('root')
);

