import React from 'react';

import { useSelector } from 'react-redux';

import TodaysQuizItem from './TodaysQuizItem';
import TodaysQuizButton from './TodaysQuizButton';

const styles = {
  layout: {
    top: '8%',
    left: '50%',
    transform: 'translate(-50%,0)',
    position: 'absolute',
    width: '62rem',
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
};

export default function TodaysQuiz() {
  const quizzes = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizzes);
  const targetQuiz = quizzes[0] || { question: '', answer: '', tags: [] };

  return (
    <div css={styles.layout}>
      <div css={styles.title}>오늘의 문제</div>
      <div css={styles.container}>
        <TodaysQuizItem quiz={targetQuiz} />
        <TodaysQuizButton />
      </div>
    </div>
  );
}
