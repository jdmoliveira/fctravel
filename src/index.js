import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Reports from "./components/Reports";
import Group from './components/Group';
import Header from './components/Header'

ReactDOM.render(
  <Router history={history}>
      <Header/>
    <Switch>
      <Route exact path={"/ipm_project/"} component={App} />
      <Route path={"/ipm_project/reports/"} component={Reports} />
      <Route path={"/ipm_project/group/"} component={Group} />
    </Switch>
  </Router>,
document.getElementById('root')
);
