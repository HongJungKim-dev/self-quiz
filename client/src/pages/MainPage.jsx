import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizzes } from '../slice';

import QuizForm from '../components/QuizForm';
import Tab from '../components/Tab';
import UserTitle from '../components/UserTitle';

import api from '../apis/api';

const getQuizzesFromServer = async (dispatch) => {
  const data = await api.getQuizzes();
  dispatch(setQuizzes(data));
};

export default function MainPage() {
  const dispatch = useDispatch();
  const states = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { quizzes, modal } = states;
  const { adding } = modal;

  useEffect(() => {
    if (quizzes.length === 0) {
      getQuizzesFromServer(dispatch);
    }
  }, []);

  return (
    <div>
      {adding && <QuizForm />}
      <UserTitle />
      <Tab />
    </div>
  );
}
