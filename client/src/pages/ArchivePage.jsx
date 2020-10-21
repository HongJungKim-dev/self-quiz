import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Archive from '../components/Archive';

import { setQuizzes } from '../slice';

import api from '../apis/quiz';

const getDataFromServer = async (dispatch) => {
  const data = await api.getQuizzes();

  dispatch(setQuizzes(data));
};

export default function ArchivePage() {
  const dispatch = useDispatch();
  const quizzes = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizzes);

  useEffect(() => {
    if (quizzes.length === 0) {
      getDataFromServer(dispatch);
    }
  }, []);

  return <Archive />;
}
