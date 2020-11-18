import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setLoginId, setLoginPw, setToken, setQuizzes,
} from '../../slice';

import { popupMessages } from '../../util';

import api from '../../apis/api';

import LoginFormInput from '../presentationals/LoginFormInput';
import LoginFormButton from '../presentationals/LoginFormButton';
import LoginFormLayout from '../layouts/LoginFormLayout';
import LoginFormLogo from '../presentationals/LoginFormLogo';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { id, pw } = useSelector((state) => state.login);

  const handleLoginIdInput = (event) => {
    dispatch(setLoginId(event.target.value));
  };

  const handleLoginPwInput = (event) => {
    dispatch(setLoginPw(event.target.value));
  };

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
    <LoginFormLayout>
      <LoginFormLogo />
      <LoginFormInput
        value={id}
        onChange={handleLoginIdInput}
        placeholder="아이디를 입력해주세요."
      />
      <LoginFormInput
        value={pw}
        onChange={handleLoginPwInput}
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <LoginFormButton
        title="로그인"
        onClick={handleLoginButtonClick}
      />
      <LoginFormButton
        title="회원가입"
        onClick={handleLoginButtonClick}
      />
    </LoginFormLayout>
  );
}
