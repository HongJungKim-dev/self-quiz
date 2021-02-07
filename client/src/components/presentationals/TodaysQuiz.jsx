import React from 'react';

import TodaysQuizAnswer from './TodaysQuizAnswer';

import { color, size } from '../../static';

const styles = {
  layout: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  quizCount: {
    width: 'max-content',
    color: 'white',
    fontSize: size.smallText,
    borderBottom: '1px solid',
    margin: '0 0 0 auto',
  },
  question: {
    textAlign: 'center',
    color: color.font,
    fontSize: size.title,
    marginBottom: '3rem',
    '@media (max-width: 768px)': {
      fontSize: '4rem',
    },
  },
  button: {
    display: 'block',
    margin: '0 auto',
    padding: '1rem 3rem',
    backgroundColor: color.main,
    color: color.font,
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: color.light,
    },
    '@media (max-width: 768px)': {
      padding: '1.5rem 5rem',
    },
  },
};

export default function TodaysQuiz({
  quiz, remainQuizCount, answerOn, onAnswerClick, onPassClick, onKeepClick, onFailClick,
}) {
  return (
    <div css={styles.layout}>
      <div css={styles.quizCount}>남은 문제: {remainQuizCount}개</div>
      <div css={styles.question}>Q. {quiz.question}</div>
      {answerOn
        ? (
          <TodaysQuizAnswer
            quiz={quiz}
            onPassClick={onPassClick}
            onKeepClick={onKeepClick}
            onFailClick={onFailClick}
          />
        )
        : (
          <button
            type="button"
            css={styles.button}
            onClick={onAnswerClick}
          >
            정답 확인하기
          </button>
        )}
    </div>
  );
}
