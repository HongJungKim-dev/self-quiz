import React from 'react';

import { useDispatch } from 'react-redux';

import { setTodaysAnswerOn, removeTodaysQuiz, setAnswerForm } from '../slice';

import api from '../apis/api';

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
  bundle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: '1rem 0 0 0.2rem',
    color: 'white',
    background: '#244a72',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '8rem',
    height: '3rem',
    border: 'none',
    borderRadius: '0.3rem',
    boxShadow: '0 0 4px 3px #a9dfc3',
    cursor: 'pointer',
    '@media (max-width: 720px)': {
      width: '18vw',
      fontSize: '2vw',
    },
  },
};

export default function TodaysQuiz({ quiz }) {
  const dispatch = useDispatch();

  const handleShowAnswerButton = () => {
    dispatch(setTodaysAnswerOn(true));
  };

  const handlePassButton = async () => {
    await api.passQuiz(quiz._id);
    dispatch(removeTodaysQuiz(quiz._id));
    dispatch(setTodaysAnswerOn(false));
    dispatch(setAnswerForm(''));
  };

  const handleFailButton = async () => {
    await api.failQuiz(quiz._id);
    dispatch(removeTodaysQuiz(quiz._id));
    dispatch(setTodaysAnswerOn(false));
    dispatch(setAnswerForm(''));
  };

  return (
    <>
      <div css={styles.layout}>
        <div>
          <button
            type="button"
            onClick={handleShowAnswerButton}
            css={styles.button}
          >
            정답 확인하기
          </button>
        </div>
        <div css={styles.bundle}>
          <button
            type="button"
            onClick={handleFailButton}
            css={{ ...styles.button, background: '#bf0a0a' }}
          >
            실패
          </button>
          <button
            type="button"
            onClick={handlePassButton}
            css={{ ...styles.button, background: '#2a5582' }}
          >
            통과
          </button>
        </div>
      </div>
    </>
  );
}
