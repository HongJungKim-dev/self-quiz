import React from 'react';

import TodaysQuizAnswerHeader from './TodaysQuizAnswerHeader';
import TodaysQuizAnswerBody from './TodaysQuizAnswerBody';
import TodaysQuizAnswerButtons from './TodaysQuizAnswerButtons';

const styles = {
  layout: {
    width: '100%',
    height: '35vh',
  },
};

export default function TodaysQuizAnswer({
  quiz, onPassClick, onKeepClick, onFailClick,
}) {
  return (
    <div css={styles.layout}>
      <TodaysQuizAnswerHeader quiz={quiz} />
      <TodaysQuizAnswerBody quiz={quiz} />
      <TodaysQuizAnswerButtons
        onPassClick={onPassClick}
        onKeepClick={onKeepClick}
        onFailClick={onFailClick}
      />
    </div>
  );
}
