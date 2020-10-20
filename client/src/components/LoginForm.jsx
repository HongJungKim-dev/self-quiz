import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLoginId, setLoginPw } from '../../slice';

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
        inputValue={id}
        onChange={handleLoginIdInput}
      />
      <Input
        inputValue={pw}
        onChange={handleLoginPwInput}
      />
      <Button
        buttonName="로그인"
        onClick={handleLoginButtonClick}
      />
    </>
  );
}
