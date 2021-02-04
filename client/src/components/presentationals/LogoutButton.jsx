import React from 'react';

import { color, size } from '../../static';

const styles = {
  button: {
    position: 'absolute',
    right: 0,
    width: '7rem',
    height: '3rem',
    fontSize: size.sm,
    fontWeight: 'bold',
    color: color.font,
    background: `linear-gradient(90deg, ${color.dark}, ${color.main})`,
    border: 'none',
    borderRadius: '0.6rem',
    cursor: 'pointer',
    margin: '2rem',
    boxShadow: `0 0 8px 0px ${color.faintWhite}`,
    '@media (max-width: 680px)': {
      fontSize: '3vw',
      width: '20vw',
      height: '10vw',
    },
  },
};

export default function LogoutButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      css={styles.button}
    >
      로그아웃
    </button>
  );
}
