import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizForm } from '../slice';

import Textarea from './Textarea';

const styles = {
  title: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginTop: '1rem',
  },
  input: {
    display: 'block',
    width: '100%',
    height: '8rem',
    fontSize: '1rem',
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
  },
  tags: {
    height: '3rem',
  },
};

export default function QuizFormInputContainer() {
  const dispatch = useDispatch();
  const { question, answer } = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizForm);

  const handleInputChange = (propName) => (e) => {
    const formState = {};
    formState[propName] = e.target.value;

    dispatch(setQuizForm(formState));
  };

  return (
    <>
      <div css={styles.title}>문제</div>
      <Textarea
        value={question}
        onChange={handleInputChange('question')}
        emotion={styles.input}
        placeholder="문제를 입력해주세요."
      />
      <div css={styles.title}>정답</div>
      <Textarea
        value={answer}
        onChange={handleInputChange('answer')}
        emotion={styles.input}
        placeholder="정답을 입력해주세요."
      />
      <div css={styles.title}>#태그</div>
      <Textarea
        onChange={handleInputChange('tagString')}
        emotion={{ ...styles.input, ...styles.tags }}
        placeholder="#오늘의 #문제"
      />
    </>
  );
}
