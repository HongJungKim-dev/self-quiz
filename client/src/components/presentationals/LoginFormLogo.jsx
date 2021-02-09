import React from 'react';

import { color } from '../../static';

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 0 0 0',
    '@media (max-width: 768px)': {
      padding: '5rem 0 0 0',
    },
    '@media (max-width: 480px)': {
      padding: '12vh 0 0 0',
    },
  },
  text: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: color.main,
    '@media (max-width: 768px)': {
      fontSize: '5rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '7rem',
    },
  },
  logo: {
    width: '12rem',
    display: 'table',
    '@media (max-width: 768px)': {
      width: '30rem',
    },
    '@media (max-width: 480px)': {
      width: '50rem',
    },
  },
};

export default function LoginFormLogo() {
  return (
    <div css={styles.layout}>
      <div css={styles.text}>오늘의 문제</div>
      <img src="src/styles/logo.png" alt="로고" css={styles.logo} />
    </div>
  );
}
