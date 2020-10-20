import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLoginId, setLoginPw } from '../slice';

import Input from './Input';
import Button from './Button';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { id, pw } = useSelector(({ selfQuizReducer }) => selfQuizReducer.login);

  const handleLoginIdInput = (event) => {
    dispatch(setLoginId(event.target.value));
  };

  const handleLoginPwInput = (event) => {
    dispatch(setLoginPw(event.target.value));
  };

  const handleLoginButtonClick = () => {
    console.log(id, pw);
  };

  return (
    <>
      <Input
        value={id}
        onChange={handleLoginIdInput}
      />
      <Input
        value={pw}
        onChange={handleLoginPwInput}
      />
      <Button
        title="로그인"
        onClick={handleLoginButtonClick}
      />
    </>
  );
}
