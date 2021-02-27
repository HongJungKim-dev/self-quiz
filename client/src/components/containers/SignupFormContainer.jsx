import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSignupForm } from '../../slice';

import LoginFormLayout from '../layouts/LoginFormLayout';
import LoginFormLogo from '../presentationals/LoginFormLogo';
import SignupFormBody from '../presentationals/SignupFormBody';

export default function SignupFormContainer() {
  const dispatch = useDispatch();
  const {
    name, id, pw1, pw2,
  } = useSelector((state) => state.form.signup);

  const handleSignupNameInput = (event) => {
    dispatch(setSignupForm({ type: 'name', value: event.target.value }));
  };

  const handleSignupIdInput = (event) => {
    dispatch(setSignupForm({ type: 'id', value: event.target.value }));
  };

  const handleSignupPw1Input = (event) => {
    dispatch(setSignupForm({ type: 'pw1', value: event.target.value }));
  };

  const handleSignupPw2Input = (event) => {
    dispatch(setSignupForm({ type: 'pw2', value: event.target.value }));
  };

  const handleSignupButtonClick = () => {};

  return (
    <LoginFormLayout>
      <LoginFormLogo signup />
      <SignupFormBody
        nameInput={name}
        idInput={id}
        pw1Input={pw1}
        pw2Input={pw2}
        onNameInputChange={handleSignupNameInput}
        onIdInputChange={handleSignupIdInput}
        onPw1InputChange={handleSignupPw1Input}
        onPw2InputChange={handleSignupPw2Input}
        onSignupButtonClick={handleSignupButtonClick}
      />
    </LoginFormLayout>
  );
}
