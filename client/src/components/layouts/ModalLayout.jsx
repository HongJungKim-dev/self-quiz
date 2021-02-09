import React from 'react';

import { color, size } from '../../static';

const styles = {
  layout: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40rem',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    boxShadow: `0 0 11px 0px ${color.main}`,
    zIndex: 2,
    '@media (max-width: 768px)': {
      width: '90vw',
      borderRadius: '1.5rem',
    },
  },
  title: {
    fontSize: size.smallTitle,
    fontWeight: 'bold',
    backgroundColor: color.main,
    color: color.font,
    padding: '0.5rem 1rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem 0.4rem 0 0',
    '@media (max-width: 768px)': {
      fontSize: '5rem',
      padding: '1rem',
      borderRadius: '1.4rem 1.4rem 0 0',
    },
  },
  body: {
    padding: '2rem',
    '@media (max-width: 768px)': {
      padding: '3rem',
    },
  },
};

export default function ModalLayout({ title, children }) {
  return (
    <div css={styles.layout}>
      <div css={styles.title}>{title}</div>
      <div css={styles.body}>
        {children}
      </div>
    </div>
  );
}
