import React from 'react';

import { useSelector } from 'react-redux';

import ArchiveQuizContainer from './ArchiveQuizContainer';

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
            <ArchiveQuizContainer quiz={quiz} />
          </div>
        ))}
      </div>
    </>
  );
}
