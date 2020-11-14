import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizForm } from '../slice';

import ArchiveEditModalInputContainer from './ArchiveEditModalInputContainer';
import ArchiveEditModalButtonContainer from './ArchiveEditModalButtonContainer';

const styles = {
  layout: {
    position: 'fixed',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '40rem',
    color: 'black',
    background: 'white',
    borderRadius: '0.5rem',
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
  container: {
    padding: '2rem',
  },
};

export default function ArchiveEditModal() {
  const dispatch = useDispatch();
  const { archive } = useSelector(({ selfQuizReducer }) => selfQuizReducer.modal);
  const { question, answer, tagString } = archive;

  useEffect(() => {
    dispatch(setQuizForm({ question, answer, tagString }));
  }, []);

  return (
    <div css={styles.layout}>
      <div css={styles.title}>Quiz</div>
      <div css={styles.container}>
        <ArchiveEditModalInputContainer />
        <ArchiveEditModalButtonContainer />
      </div>
    </div>
  );
}
