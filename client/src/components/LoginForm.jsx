import React from 'react';

import LoginInputContainer from './LoginInputContainer';
import LoginButtonContainer from './LoginButtonContainer';

const styles = {
  layout: {
    position: 'absolute',
    top: '20vh',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '30rem',
    borderRadius: '0.5rem',
    background: 'white',
    boxShadow: '0 0 11px 0px #244a72',
    '@media (max-width: 480px)': {
      width: '100vw',
    },
    '@media (max-height: 680px)': {
      top: '0vw',
      height: '100vh',
    },
  },
  title: {
    background: '#092747',
    height: '3rem',
    borderRadius: '0.5rem 0.5rem 0 0',
  },
  container: {
    padding: '2rem',
  },
  text: {
    marginTop: '2rem',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#244a72',
  },
  logo: {
    width: '12rem',
    margin: '0 auto 4rem auto',
    display: 'table',
  },
};

export default function LoginForm() {
  return (
    <div css={styles.layout}>
      <div css={styles.title} />
      <div css={styles.container}>
        <div css={styles.text}>오늘의 문제</div>
        <img src="src/styles/logo.png" alt="로고" css={styles.logo} />
        <LoginInputContainer />
        <LoginButtonContainer />
      </div>
    </div>
  );
}
