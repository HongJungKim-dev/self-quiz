import React, { Suspense, lazy } from 'react';

import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const Overlay = lazy(() => import('./pages/Overlay'));
const TodaysQuizPage = lazy(() => import('./pages/TodaysQuizPage'));
const ArchivePage = lazy(() => import('./pages/ArchivePage'));

export default function App() {
  const modalShowing = useSelector((state) => state.modalShowing);

  return (
    <>
      <Suspense fallback={<div>로딩중</div>}>
        {modalShowing.overlay && <Overlay />}
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/page/todaysquiz">
              <TodaysQuizPage />
            </Route>
            <Route path="/page/archive">
              <ArchivePage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}
