import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes, loadUserName, setToken } from '../slice';

import { popupMessages } from '../util';

import QuizFormContainer from '../components/containers/QuizFormContainer';
import TabContainer from '../components/containers/TabContainer';
import UserTitle from '../components/presentationals/UserTitle';
import LogoutButton from '../components/presentationals/LogoutButton';

export default function MainPage() {
  const dispatch = useDispatch();
  const {
    quizzes, modal, user, todays,
  } = useSelector((state) => state);
  const { adding } = modal;

  const handleLogoutButtonClick = async () => {
    localStorage.removeItem('token');
    dispatch(setToken(null));

    await popupMessages.success('로그아웃 되었습니다.');
  };

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
      <LogoutButton onClick={handleLogoutButtonClick} />
      {adding && <QuizFormContainer />}
      <UserTitle user={user} todays={todays} />
      <TabContainer />
    </div>
  );
}
