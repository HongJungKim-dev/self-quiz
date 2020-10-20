import React from 'react';

import { useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';
import QuizForm from '../components/QuizForm';

export default function LoginPage() {
  const token = useSelector(({ selfQuizReducer }) => selfQuizReducer.token);

  if (token) {
    return <QuizForm />;
  }

  return <LoginForm />;
}
