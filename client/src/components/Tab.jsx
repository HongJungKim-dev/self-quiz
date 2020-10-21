import React from 'react';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { setAddingModal, setOverlay } from '../slice';

const styles = {
  tab: {
    display: 'flex',
    justifyContent: 'center',
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
  },
};

export default function Tab() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddingButton = () => {
    dispatch(setAddingModal(true));
    dispatch(setOverlay(true));
  };

  return (
    <div css={styles.tab}>
      <button onClick={handleAddingButton} css={styles.selection} type="button">
        문제 추가
      </button>
      <button onClick={() => history.push('/')} css={styles.selection} type="button">
        오늘의 문제
      </button>
      <button onClick={() => history.push('/archive')} css={styles.selection} type="button">
        아카이브
      </button>
    </div>
  );
}
