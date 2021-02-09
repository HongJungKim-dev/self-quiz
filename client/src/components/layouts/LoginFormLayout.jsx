import React from 'react';

import { color } from '../../static';

const styles = {
  layout: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    borderRadius: '0.6rem',
    backgroundColor: 'white',
    '@media (max-width: 768px)': {
      width: '50rem',
      height: '70rem',
    },
    '@media (max-width: 480px)': {
      height: '96vh',
      width: '96vw',
    },
  },
  emptyHeader: {
    backgroundColor: color.dark,
    height: '3rem',
    borderRadius: '0.5rem 0.5rem 0 0',
    borderTop: `1px solid ${color.dark}`,
    '@media (max-width: 768px)': {
      height: '5rem',
    },
    '@media (max-width: 480px)': {
      height: '8vh',
    },
  },
  container: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      height: '60rem',
    },
    '@media (max-width: 480px)': {
      height: '85vh',
    },
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
