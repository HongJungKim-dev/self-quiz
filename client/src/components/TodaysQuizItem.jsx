import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setAnswerForm } from '../slice';

import Textarea from './Textarea';

const styles = {
  question: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    '@media (max-width: 720px)': {
      fontSize: '4vw',
      marginBottom: '4vh',
    },
  },
  answer: {
    width: '100%',
    height: '12rem',
    background: 'white',
    fontSize: '1.2rem',
    marginBottom: '2rem',
    resize: 'none',
    '@media (max-width: 720px)': {
      fontSize: '3vw',
      height: '30vw',
    },
  },
  on: {
    color: 'black',
    border: '3px solid white',
    boxSizing: 'border-box',
  },
  off: {
    color: 'white',
    border: '3px dashed #244a72',
    boxSizing: 'border-box',
  },
  box: {
    width: '100%',
    height: '7rem',
    fontSize: '1.2rem',
    padding: '1rem',
    boxSizing: 'border-box',
    '@media (max-width: 720px)': {
      fontSize: '3vw',
      height: '18vw',
    },
  },
  notice: {
    fontSize: '0.8rem',
    '@media (max-width: 720px)': {
      fontSize: '1vw',
    },
  },
};

export default function TodaysQuizItem({ quiz }) {
  const dispatch = useDispatch();
  const { answerOn, answerForm } = useSelector(({ selfQuizReducer }) => selfQuizReducer.todays);

  const { question, answer, tags } = quiz;

  const handleAnswerForm = (e) => {
    dispatch(setAnswerForm(e.target.value));
  };

  return (
    <>
      <div css={styles.question}>
        Q. {question}
      </div>
      <Textarea
        value={`A. ${answer}`}
        emotion={{ ...styles.answer, ...(answerOn ? styles.on : styles.off) }}
        disabled="disabled"
      />
      <Textarea
        value={answerForm}
        onChange={handleAnswerForm}
        emotion={styles.box}
        placeholder="정답을 입력하세요."
      />
      <div css={styles.notice}>
        정답을 생각만하는 것과 직접 글로 작성하여 끄집어내는 것은 다릅니다. 직접 입력하신 뒤 정답을 확인하시길 추천드립니다.
      </div>
    </>
  );
}
