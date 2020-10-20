import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLoginId, setLoginPw } from '../slice';

import Input from './Input';

const styles = {
  input: {
    display: 'block',
    fontSize: '1rem',
    width: '20rem',
    height: '2rem',
    border: 'none',
    borderBottom: '1px solid #3e7cbc',
  },
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const { id, pw } = useSelector(({ selfQuizReducer }) => selfQuizReducer.login);

  const handleLoginIdInput = (event) => {
    dispatch(setLoginId(event.target.value));
  };

  const handleLoginPwInput = (event) => {
    dispatch(setLoginPw(event.target.value));
  };

  return (
    <>
      <Input
        value={id}
        onChange={handleLoginIdInput}
        emotion={styles.input}
      />
      <Input
        value={pw}
        onChange={handleLoginPwInput}
        emotion={styles.input}
      />
    </>
  );
}
