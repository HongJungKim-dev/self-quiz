import React from 'react';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { setAddingModal, setTodaysQuizModal, setOverlay } from '../slice';

import Button from './Button';

const styles = {
  tab: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  selection: {
    border: 'none',
    borderRadius: '1rem',
    width: '20rem',
    height: '20rem',
    margin: '0.5rem',
    boxShadow: '0 0 6px 0px #ffffff',
    background: 'linear-gradient(45deg, black, transparent)',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    '&:hover': {
      background: '#3e7cbc54',
      cursor: 'pointer',
    },
    '&:focus': {
      background: '#3e7cbc54',
      cursor: 'pointer',
    },
    '@media (max-width: 960px)': {
      height: '30vw',
    },
    '@media (max-width: 680px)': {
      fontSize: '3vw',
    },
  },
};

export default function Tab() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddingButton = () => {
    dispatch(setAddingModal(true));
    dispatch(setOverlay(true));
  };

  const handleTodaysButton = () => {
    dispatch(setTodaysQuizModal(true));
    dispatch(setOverlay(true));
  };

  return (
    <div css={styles.tab}>
      <Button
        title="문제 추가"
        onClick={handleAddingButton}
        emotion={styles.selection}
      />
      <Button
        title="오늘의 문제"
        onClick={handleTodaysButton}
        emotion={styles.selection}
      />
      <Button
        title="아카이브"
        onClick={() => history.push('/archive')}
        emotion={styles.selection}
      />
    </div>
  );
}
