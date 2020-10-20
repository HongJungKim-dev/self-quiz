import React from 'react';

import LoginInputContainer from './LoginInputContainer';
import LoginButtonContainer from './LoginButtonContainer';

const styles = {
  layout: {
    display: 'table',
    margin: '20rem auto 0 auto',
    padding: '3rem',
    borderRadius: '1rem',
    boxShadow: '0 0 11px 0px #3e7cbc',
  },
};

export default function LoginForm() {
  return (
    <div css={styles.layout}>
      <LoginInputContainer />
      <LoginButtonContainer />
    </div>
  );
}
