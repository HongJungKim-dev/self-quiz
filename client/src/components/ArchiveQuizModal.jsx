import React from 'react';

import ArchiveQuizModalInputContainer from './ArchiveQuizModalInputContainer';
import ArchiveQuizModalButtonContainer from './ArchiveQuizModalButtonContainer';

const styles = {
  layout: {
    position: 'fixed',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '40rem',
    height: '40rem',
    color: 'black',
    background: 'white',
    borderRadius: '0.5rem',
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
  container: {
    padding: '2rem',
  },
};

export default function ArchiveQuizModal() {
  return (
    <div css={styles.layout}>
      <div css={styles.title}>Quiz</div>
      <div css={styles.container}>
        <ArchiveQuizModalInputContainer />
        <ArchiveQuizModalButtonContainer />
      </div>
    </div>
  );
}
