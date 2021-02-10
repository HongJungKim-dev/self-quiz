import React from 'react';

import { useSelector } from 'react-redux';

import MainPage from './MainPage';
import LoginFormContainer from '../components/containers/LoginFormContainer';

export default function HomePage() {
  const token = useSelector((state) => state.user.token);

  if (token) {
    return <MainPage />;
  }

  return <LoginFormContainer />;
}
