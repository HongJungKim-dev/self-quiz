import React from 'react';

import { color } from '../../static';

import ReturningIcon from '../icons/Returningcon';

const styles = {
  button: {
    position: 'fixed',
    width: '2rem',
    color: color.font,
    cursor: 'pointer',
    margin: '2rem',
    '&:hover': {
      color: color.faintWhite,
    },
    '@media (max-width: 768px)': {
      width: '5rem',
    },
  },
};

export default function BackButton({ onClick }) {
  return (
    <div
      title="돌아가기"
      css={styles.button}
      onClick={onClick}
    >
      <ReturningIcon />
    </div>
  );
}
