import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import QuizAddingPage from './pages/QuizAddingPage';
import ArchivePage from './pages/ArchivePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/adding">
          <QuizAddingPage />
        </Route>
        <Route path="/archive">
          <ArchivePage />
        </Route>
      </Switch>
    </Router>
  );
}
