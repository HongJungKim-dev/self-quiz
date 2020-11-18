import React from 'react';

import { useSelector } from 'react-redux';

import MainPage from './MainPage';
import LoginForm from '../components/containers/LoginForm';

export default function HomePage() {
  const token = useSelector((state) => state.token);

  if (token) {
    return <MainPage />;
  }

  return <LoginForm />;
}
