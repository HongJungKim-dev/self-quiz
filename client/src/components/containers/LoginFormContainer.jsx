import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { setLoginForm, setToken } from '../../slice';

import { popupMessages } from '../../util';

import api from '../../apis/api';

import LoginFormLayout from '../layouts/LoginFormLayout';
import LoginFormLogo from '../presentationals/LoginFormLogo';
import LoginFormBody from '../presentationals/LoginFormBody';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { id, pw } = useSelector((state) => state.form.login);

  const handleLoginIdInput = (event) => {
    dispatch(setLoginForm({ type: 'id', value: event.target.value }));
  };

  const handleLoginPwInput = (event) => {
    dispatch(setLoginForm({ type: 'pw', value: event.target.value }));
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
  };

  const history = useHistory();

  const handleSignupButtonClick = () => {
    history.push('/page/signup');
  };

  return (
    <LoginFormLayout>
      <LoginFormLogo />
      <LoginFormBody
        idInput={id}
        pwInput={pw}
        onIdInputChange={handleLoginIdInput}
        onPwInputChange={handleLoginPwInput}
        onLoginButtonClick={handleLoginButtonClick}
        onSignupButtonClick={handleSignupButtonClick}
      />
    </LoginFormLayout>
  );
}
