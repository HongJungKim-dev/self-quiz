import React from 'react';

import Button from '../Button';

const styles = {
  button: {
    position: 'fixed',
    width: '7rem',
    height: '3rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(90deg,#000000,#263443 )',
    border: 'none',
    borderRadius: '0.6rem',
    cursor: 'pointer',
    margin: '2rem 1rem',
    boxShadow: '0 0 8px 0px #ffffff',
    '@media (max-width: 960px)': {
      width: '12vw',
      fontSize: '2vw',
    },
  },
};

export default function ArchiveBackButton({ onClick }) {
  return (
    <Button
      title="Back"
      emotion={styles.button}
      onClick={onClick}
    />
  );
}
