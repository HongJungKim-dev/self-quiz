import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/quiz">
          <div>quiz here</div>
        </Route>
      </Switch>
    </Router>
  );
}
