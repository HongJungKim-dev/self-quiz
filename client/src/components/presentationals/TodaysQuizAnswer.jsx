import React from 'react';

import { size } from '../../static';

import TodaysQuizAnswerHeader from './TodaysQuizAnswerHeader';
import TodaysQuizAnswerBody from './TodaysQuizAnswerBody';
import TodaysQuizAnswerButtons from './TodaysQuizAnswerButtons';

const styles = {
  layout: {
    width: '100%',
    height: '25rem',
    fontSize: size.smallText,
    '@media (max-width: 768px)': {
      height: '40rem',
    },
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
