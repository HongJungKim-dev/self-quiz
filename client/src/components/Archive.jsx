import React from 'react';

import { useSelector } from 'react-redux';

import ArchiveQuiz from './ArchiveQuiz';

export default function Archive() {
  const quizzes = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizzes);

  return (
    <>
      <div>
        {quizzes.map((quiz) => (
          <div key={quiz.question}>
            <ArchiveQuiz quiz={quiz} />
          </div>
        ))}
      </div>
    </>
  );
}
