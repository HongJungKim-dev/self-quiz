import React from 'react';

import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Overlay from './pages/Overlay';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';

export default function App() {
  const { overlay } = useSelector((state) => state.modal);

  return (
    <>
      {overlay && <Overlay />}
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/archive">
            <ArchivePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
