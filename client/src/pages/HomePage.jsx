import React from 'react';

import { useSelector } from 'react-redux';

import MainPage from './MainPage';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  const token = useSelector(({ selfQuizReducer }) => selfQuizReducer.token);

  if (token) {
    return <MainPage />;
  }

  return <LoginForm />;
}
