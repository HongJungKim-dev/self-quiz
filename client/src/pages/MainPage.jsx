import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setQuizzes, setUserName,
} from '../slice';

import QuizForm from '../components/QuizForm';
import Tab from '../components/Tab';

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

  useEffect(() => {
    if (quizzes.length === 0) {
      getQuizzesFromServer(dispatch);
    }

    if (!name) {
      getUserNameFromServer(dispatch);
    }
  }, []);

  return (
    <div>
      <div css={styles.tab}>
        {adding && <QuizForm />}
      </div>
      <div css={styles.title}>
        <div css={styles.name}>{name}님,</div>
        <div css={styles.text}>오늘 복습해야 할 문제는 총 {12}문제 입니다.</div>
      </div>
      <Tab />
    </div>
  );
}
