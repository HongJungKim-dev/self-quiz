import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginForm from './components/LoginForm';

const styles = {
  emotion: {
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'blue',
  },
};

export default function App() {
  return (
    <>
      <div css={styles.emotion}>Quick Start React</div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/quiz">
            <div>quiz here</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
