import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { resetSignupForm, setSignupForm } from '../../slice';

import { popupMessages } from '../../util';

import api from '../../apis/api';

import LoginFormLayout from '../layouts/LoginFormLayout';
import LoginFormLogo from '../presentationals/LoginFormLogo';
import SignupFormBody from '../presentationals/SignupFormBody';

export default function SignupFormContainer() {
  const dispatch = useDispatch();
  const {
    name, id, pw1, pw2,
  } = useSelector((state) => state.form.signup);

  const handleInput = (type) => (event) => {
    dispatch(setSignupForm({ type, value: event.target.value }));
  };

  const history = useHistory();

  const handleSignupButtonClick = async () => {
    if (!name || !id || !pw1 || !pw2) {
      await popupMessages.fail('모든 항목을 입력하셔야 합니다.');
      return;
    }

    if (id.length < 4) {
      await popupMessages.fail('아이디는 4글자 이상으로 설정하셔야 합니다.');
      return;
    }

    if (pw1.length < 4) {
      await popupMessages.fail('비밀번호는 4글자 이상으로 설정하셔야 합니다.');
      return;
    }

    if (pw1 !== pw2) {
      await popupMessages.fail('두 비밀번호가 서로 다릅니다.');
      return;
    }

    const isValid = await api.checkId(id);

    if (!isValid) {
      await popupMessages.fail('이미 사용중인 아이디입니다.');
      return;
    }

    const state = await api.signUp(id, pw1, name);

    if (!state) {
      await popupMessages.fail('뭔가 단단히 잘못됐음');
      return;
    }

    await popupMessages.success('회원가입 성공! 다시 로그인해주세요.');
    dispatch(resetSignupForm());
    history.push('/');
  };

  return (
    <LoginFormLayout>
      <LoginFormLogo signup />
      <SignupFormBody
        nameInput={name}
        idInput={id}
        pw1Input={pw1}
        pw2Input={pw2}
        onInputChange={handleInput}
        onSignupButtonClick={handleSignupButtonClick}
      />
    </LoginFormLayout>
  );
}
