import React from 'react';

import TodaysQuizContainer from '../components/containers/TodaysQuizContainer';
import BackButtonContainer from '../components/containers/BackButtonContainer';

export default function TodaysQuizPage() {
  return (
    <>
      <BackButtonContainer />
      <TodaysQuizContainer />
    </>
  );
}
