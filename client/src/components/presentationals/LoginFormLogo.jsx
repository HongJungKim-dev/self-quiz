import React from 'react';

import { color } from '../../static';

const styles = {
  text: {
    marginTop: '2rem',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: color.main,
  },
  logo: {
    width: '12rem',
    margin: '0 auto 4rem auto',
    display: 'table',
  },
};

export default function LoginFormLogo() {
  return (
    <>
      <div css={styles.text}>오늘의 문제</div>
      <img src="src/styles/logo.png" alt="로고" css={styles.logo} />
    </>
  );
}
