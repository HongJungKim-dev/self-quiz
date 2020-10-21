import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setToken, setQuizzes } from '../slice';

import { popupMessages } from '../util';

import api from '../apis/api';

import Button from './Button';

const styles = {
  button: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#3e7cbc',
    width: '20rem',
    height: '2rem',
    border: 'none',
    marginTop: '2rem',
  },
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const { id, pw } = useSelector(({ selfQuizReducer }) => selfQuizReducer.login);

  const handleLoginButtonClick = async () => {
    const token = await api.login(id, pw);

    if (!token) {
      await popupMessages.fail('아이디 혹은 패스워드가 일치하지 않습니다.');
      return;
    }

    await popupMessages.success('로그인 성공');

    localStorage.setItem('token', token);
    dispatch(setToken(token));

    const quizzes = await api.getQuizzes();
    dispatch(setQuizzes(quizzes));
  };

  return (
    <Button
      title="로그인"
      onClick={handleLoginButtonClick}
      emotion={styles.button}
    />
  );
}
