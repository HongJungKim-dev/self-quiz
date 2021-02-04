import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes, loadUserName, setToken } from '../slice';

import { popupMessages } from '../util';

import AddingFormContainer from '../components/containers/AddingFormContainer';
import TabContainer from '../components/containers/TabContainer';
import UserTitle from '../components/presentationals/UserTitle';
import LogoutButton from '../components/presentationals/LogoutButton';
import MainPageLayout from '../components/layouts/MainPageLayout';

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
    <>
      <LogoutButton onClick={handleLogoutButtonClick} />
      {adding && <AddingFormContainer />}
      <MainPageLayout>
        <UserTitle user={user} todays={todays} />
        <TabContainer />
      </MainPageLayout>
    </>
  );
}
