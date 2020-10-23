import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setTodaysQuizzes } from '../slice';

import filterTodaysQuiz from '../algorithm';

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
    height: '50rem',
    borderRadius: '0.5rem',
    background: 'white',
    boxShadow: '0 0 11px 0px #244a72',
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
  },
};

export default function TodaysQuiz() {
  const dispatch = useDispatch();
  const { quizzes, todays } = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const todaysQuizzes = filterTodaysQuiz(quizzes);
  const targetQuiz = todaysQuizzes[0] || { question: '', answer: '', tags: [] };

  useEffect(() => {
    dispatch(setTodaysQuizzes(todaysQuizzes));
  }, []);

  return (
    <div css={styles.layout}>
      <div css={styles.title}>오늘의 문제</div>
      <div css={styles.container}>
        {todaysQuizzes.length === 0
          ? <TodaysQuizEmpty />
          : (
            <>
              <div css={styles.count}>남은 문제: {todays.quizzes.length}</div>
              <TodaysQuizItem quiz={targetQuiz} />
              <TodaysQuizButton />
            </>
          )}
      </div>
    </div>
  );
}
