import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes, loadUserName } from '../slice';

import LogoutButtonContainer from '../components/LogoutButtonContainer';
import QuizFormContainer from '../components/containers/QuizFormContainer';
import TodaysQuiz from '../components/TodaysQuiz';
import Tab from '../components/containers/TabContainer';
import UserTitle from '../components/presentationals/UserTitle';

export default function MainPage() {
  const dispatch = useDispatch();
  const {
    quizzes, modal, user, todays,
  } = useSelector((state) => state);
  const { adding, todays: isOpenedTodayQuiz } = modal;

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
    }

    if (!user.name) {
      dispatch(loadUserName());
    }
  }, []);

  return (
    <div>
      <LogoutButtonContainer />
      {adding && <QuizFormContainer />}
      {isOpenedTodayQuiz && <TodaysQuiz />}
      <UserTitle user={user} todays={todays} />
      <Tab />
    </div>
  );
}
