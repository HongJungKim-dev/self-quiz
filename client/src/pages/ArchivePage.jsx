import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Archive from '../components/Archive';

import { loadQuizzes } from '../slice';

export default function ArchivePage() {
  const dispatch = useDispatch();
  const quizzes = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizzes);

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
    }
  }, []);

  return <Archive />;
}
