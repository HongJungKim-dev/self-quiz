import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizzes } from '../slice';

import QuizForm from '../components/QuizForm';
import Tab from '../components/Tab';
import UserTitle from '../components/UserTitle';

import api from '../apis/api';

const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
  },
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

export default function MainPage() {
  const dispatch = useDispatch();
  const states = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { quizzes, modal } = states;
  const { adding } = modal;

  useEffect(() => {
    if (quizzes.length === 0) {
      getQuizzesFromServer(dispatch);
    }
  }, []);

  return (
    <div>
      <div css={styles.modal}>
        {adding && <QuizForm />}
      </div>
      <UserTitle />
      <Tab />
    </div>
  );
}
