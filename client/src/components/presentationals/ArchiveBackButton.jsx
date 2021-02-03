import React from 'react';

import { color, size } from '../../static';

const styles = {
  button: {
    position: 'fixed',
    width: '7rem',
    height: '3rem',
    fontSize: size.smallText,
    fontWeight: 'bold',
    color: 'white',
    background: `linear-gradient(90deg, #000000, ${color.dark})`,
    border: 'none',
    borderRadius: '0.6rem',
    cursor: 'pointer',
    margin: '2rem 1rem',
    boxShadow: `0 0 8px 0px ${color.faintWhite}`,
    '@media (max-width: 960px)': {
      width: '12vw',
      fontSize: '2vw',
    },
  },
};

export default function ArchiveBackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      css={styles.button}
    >
      Back
    </button>
  );
}
