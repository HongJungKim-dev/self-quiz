import React, { lazy, Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes, loadUserName, setToken } from '../slice';

import { popupMessages } from '../util';

import TabContainer from '../components/containers/TabContainer';
import UserTitle from '../components/presentationals/UserTitle';
import LogoutButton from '../components/presentationals/LogoutButton';
import MainPageLayout from '../components/layouts/MainPageLayout';

const AddingFormContainer = lazy(() => import('../components/containers/AddingFormContainer'));

export default function MainPage() {
  const dispatch = useDispatch();
  const {
    quizzes, modalShowing, user, todays,
  } = useSelector((state) => state);

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
      <Suspense fallback={<div>로딩중</div>}>
        {modalShowing.adding && <AddingFormContainer />}
      </Suspense>
      <MainPageLayout>
        <UserTitle user={user} todays={todays} />
        <TabContainer />
      </MainPageLayout>
    </>
  );
}
