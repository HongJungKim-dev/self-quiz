import React from 'react';

import { useHistory } from 'react-router-dom';

import Button from './Button';

const styles = {
  button: {
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
  },
};

export default function ArchiveReturnButtonContainer() {
  const history = useHistory();

  const handleReturnButtonClick = () => {
    history.push('/');
  };

  return (
    <Button
      title="돌아가기"
      emotion={styles.button}
      onClick={handleReturnButtonClick}
    />
  );
}
