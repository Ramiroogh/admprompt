import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/hola" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
