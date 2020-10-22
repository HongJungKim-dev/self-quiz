import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes } from '../slice';

import QuizForm from '../components/QuizForm';
import Tab from '../components/Tab';
import UserTitle from '../components/UserTitle';

export default function MainPage() {
  const dispatch = useDispatch();
  const states = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { quizzes, modal } = states;
  const { adding } = modal;

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
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
