import React from 'react';

import LoginFormLayout from '../layouts/LoginFormLayout';
import LoginFormLogo from '../presentationals/LoginFormLogo';
import SignupFormBody from '../presentationals/SignupFormBody';

export default function SignupFormContainer() {
  return (
    <LoginFormLayout>
      <LoginFormLogo signup />
      <SignupFormBody />
    </LoginFormLayout>
  );
}
