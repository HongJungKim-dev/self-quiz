import React from 'react';

import { color, size } from '../../static';

const styles = {
  layout: {
    position: 'fixed',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '40rem',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    boxShadow: `0 0 11px 0px ${color.main}`,
    zIndex: 2,
  },
  title: {
    fontSize: size.smallTitle,
    fontWeight: 'bold',
    backgroundColor: color.main,
    color: color.font,
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
