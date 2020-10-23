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
    backgroundColor: '#244a72',
    width: '100%',
    height: '3rem',
    border: 'none',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    cursor: 'pointer',
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
    <>
      <Button
        title="로그인"
        onClick={handleLoginButtonClick}
        emotion={styles.button}
      />
      <Button
        title="회원가입"
        onClick={handleLoginButtonClick}
        emotion={{ ...styles.button, backgroundColor: '#2779ce' }}
      />
    </>
  );
}
