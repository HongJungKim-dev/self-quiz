import React from 'react';

import { useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const token = useSelector(({ selfQuizReducer }) => selfQuizReducer.token);

  if (token) {
    return <div>quiz page</div>;
  }

  return <LoginForm />;
}
