import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes } from '../slice';

import LogoutButtonContainer from '../components/LogoutButtonContainer';
import QuizFormContainer from '../components/containers/QuizFormContainer';
import TodaysQuiz from '../components/TodaysQuiz';
import Tab from '../components/containers/TabContainer';
import UserTitle from '../components/UserTitle';

export default function MainPage() {
  const dispatch = useDispatch();
  const { quizzes, modal } = useSelector((state) => state);
  const { adding, todays } = modal;

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
    }
  }, []);

  return (
    <div>
      <LogoutButtonContainer />
      {adding && <QuizFormContainer />}
      {todays && <TodaysQuiz />}
      <UserTitle />
      <Tab />
    </div>
  );
}
