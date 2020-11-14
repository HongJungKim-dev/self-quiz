import React from 'react';

import { useSelector } from 'react-redux';

import TodaysQuizEmpty from './TodaysQuizEmpty';
import TodaysQuizItem from './TodaysQuizItem';
import TodaysQuizButton from './TodaysQuizButton';

const styles = {
  layout: {
    top: '8%',
    left: '50%',
    transform: 'translate(-50%,0)',
    position: 'absolute',
    width: '63rem',
    borderRadius: '0.5rem',
    background: 'white',
    boxShadow: '0 0 11px 0px #244a72',
    zIndex: 2,
    '@media (max-width: 1100px)': {
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
  count: {
    textAlign: 'end',
    marginBottom: '1rem',
    '@media (max-width: 720px)': {
      fontSize: '2vw',
    },
  },
};

export default function TodaysQuiz() {
  const { todays } = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const targetQuiz = todays.quizzes[0] || { question: '', answer: '', tags: [] };

  return (
    <div css={styles.layout}>
      <div css={styles.title}>오늘의 문제</div>
      <div css={styles.container}>
        {todays.quizzes.length === 0
          ? <TodaysQuizEmpty />
          : (
            <>
              <div css={styles.count}>남은 문제: {todays.quizzes.length}</div>
              <TodaysQuizItem quiz={targetQuiz} />
              <TodaysQuizButton quiz={targetQuiz} />
            </>
          )}
      </div>
    </div>
  );
}
