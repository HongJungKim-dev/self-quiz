import React from 'react';

import { useSelector } from 'react-redux';

import ArchiveQuiz from './ArchiveQuiz';

const styles = {
  layout: {
    display: 'table',
    margin: '0 auto',
  },
};

export default function Archive() {
  const quizzes = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizzes);

  return (
    <>
      <div css={styles.layout}>
        {quizzes.map((quiz, index) => (
          <div key={index}>
            <ArchiveQuiz quiz={quiz} />
          </div>
        ))}
      </div>
    </>
  );
}
