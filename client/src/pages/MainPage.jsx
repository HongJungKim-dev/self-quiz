import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { setAddingModal, setOverlay } from '../slice';

import QuizForm from '../components/QuizForm';

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'center',
  },
  selection: {
    border: '1px solid',
    width: '20rem',
    height: '20rem',
    '&:hover': {
      background: '#3e7cbc54',
      cursor: 'pointer',
    },
  },
};

export default function MainPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { adding } = useSelector(({ selfQuizReducer }) => selfQuizReducer.modal);

  const handleAddingButton = () => {
    dispatch(setAddingModal(true));
    dispatch(setOverlay(true));
  };

  return (
    <div css={styles.layout}>
      {adding && <QuizForm />}
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
