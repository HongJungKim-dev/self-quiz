import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { setAddingModal, setOverlay, setQuizzes } from '../slice';

import QuizForm from '../components/QuizForm';

import api from '../apis/quiz';

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

const getDataFromServer = async (dispatch) => {
  const data = await api.getQuizzes();

  dispatch(setQuizzes(data));
};

export default function MainPage() {
  const dispatch = useDispatch();
  const quizzes = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizzes);
  const { adding } = useSelector(({ selfQuizReducer }) => selfQuizReducer.modal);
  const history = useHistory();

  useEffect(() => {
    if (quizzes.length === 0) {
      getDataFromServer(dispatch);
    }
  }, []);

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
