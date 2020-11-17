import React from 'react';

const styles = {
  layout: {
    position: 'fixed',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '40rem',
    borderRadius: '0.5rem',
    background: 'white',
    boxShadow: '0 0 11px 0px #244a72',
    zIndex: 2,
    '@media (max-width: 720px)': {
      width: '90vw',
    },
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: '#244a72',
    color: 'white',
    padding: '0.4rem 1rem',
    boxSizing: 'border-box',
    borderRadius: '0.5rem 0.5rem 0 0',
  },
  body: {
    padding: '2rem',
  },
};

export default function AddingModalLayout({ title, children }) {
  return (
    <div css={styles.layout}>
      <div css={styles.title}>{title}</div>
      <div css={styles.body}>
        {children}
      </div>
    </div>
  );
}
