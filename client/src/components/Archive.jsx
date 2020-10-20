import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizzes } from '../slice';

import api from '../apis/quiz';

import ArchiveQuiz from './ArchiveQuiz';

const getDataFromServer = async (dispatch) => {
  const data = await api.getQuizzes();

  dispatch(setQuizzes(data));
};

export default function Archive() {
  const dispatch = useDispatch();
  const quizzes = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizzes);

  useEffect(() => {
    if (quizzes.length === 0) {
      getDataFromServer(dispatch);
    }
  }, []);

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
