import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import {
  setAddingModal, setOverlay, setQuizzes, setUserName,
} from '../slice';

import QuizForm from '../components/QuizForm';

import api from '../apis/api';

const styles = {
  title: {
    width: '60rem',
    display: 'table',
    margin: '0 auto',
  },
  name: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '10rem',
  },
  text: {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '10rem',
  },
  tab: {
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

const getQuizzesFromServer = async (dispatch) => {
  const data = await api.getQuizzes();
  dispatch(setQuizzes(data));
};

const getUserNameFromServer = async (dispatch) => {
  const userName = await api.getUserName();
  dispatch(setUserName(userName));
};

export default function MainPage() {
  const dispatch = useDispatch();
  const states = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { quizzes, modal, user } = states;
  const { adding } = modal;
  const { name } = user;
  const history = useHistory();

  useEffect(() => {
    if (quizzes.length === 0) {
      getQuizzesFromServer(dispatch);
    }

    if (!name) {
      getUserNameFromServer(dispatch);
    }
  }, []);

  const handleAddingButton = () => {
    dispatch(setAddingModal(true));
    dispatch(setOverlay(true));
  };

  return (
    <div>
      <div css={styles.tab}>
        {adding && <QuizForm />}
      </div>
      <div css={styles.title}>
        <div css={styles.name}>{name}님,</div>
        <div css={styles.text}>오늘 복습해야 할 문제는 총 {12}문제 입니다.</div>
      </div>
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
    </div>
  );
}
