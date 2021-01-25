import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ArchiveContainer from '../components/containers/ArchiveContainer';

import { loadQuizzes } from '../slice';

export default function ArchivePage() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
    }
  }, []);

  return <ArchiveContainer />;
}
