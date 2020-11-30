import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './components/Header/Header'
import Homepage from './components/Homepage'
import Help from './components/Help'
import Profile from "./components/Header/Profile/Profile";
import Map from './components/Map'
import Timetables from './components/Timetables';
import Find from './components/Find'
import Payment from "./components/Payment/Payment";


ReactDOM.render(
  <Router history={history}>
      <Header/>
    <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route exact path={"/profile/"} component={Profile} />
        <Route exact path={"/map/"} component={Map} />
        <Route exact path={"/timetables/"} component={Timetables} />
        <Route exact path={"/find/"} component={Find} />
        <Route exact path={"/payment/"} component={Payment} />
        <Route exact path={"/help/"} component={Help} />
    </Switch>
  </Router>,
document.getElementById('root')
);

