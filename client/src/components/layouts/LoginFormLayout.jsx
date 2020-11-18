import React from 'react';

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
  emptyHeader: {
    background: '#092747',
    height: '3rem',
    borderRadius: '0.5rem 0.5rem 0 0',
  },
  container: {
    padding: '2rem',
  },
};

export default function LoginFormLayout({ children }) {
  return (
    <div css={styles.layout}>
      <div css={styles.emptyHeader} />
      <div css={styles.container}>
        {children}
      </div>
    </div>
  );
}
