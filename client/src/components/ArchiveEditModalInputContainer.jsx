import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizForm } from '../slice';

import Textarea from './Textarea';

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginTop: '1rem',
  },
  input: {
    display: 'block',
    width: '100%',
    fontSize: '1rem',
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
    background: 'white',
    '@media (max-width: 720px)': {
      fontSize: '2vw',
    },
  },
  question: {
    height: '7rem',
    '@media (max-width: 720px)': {
      height: '14vw',
      fontSize: '2vw',
    },
  },
  answer: {
    height: '16rem',
    '@media (max-width: 720px)': {
      height: '32vw',
      fontSize: '2vw',
    },
  },
  tag: {
    margin: '0.8rem 0',
    width: '100%',
    resize: 'none',
    borderRadius: '0.4rem',
    height: '1.5rem',
    padding: '0.1rem 0.4rem 0 0.4rem',
    boxSizing: 'border-box',
    '@media (max-width: 720px)': {
      fontSize: '2vw',
    },
  },
};

export default function ArchiveEditModalInputContainer() {
  const dispatch = useDispatch();
  const quizForm = useSelector((state) => state.quizForm);
  const { question, answer, tagString } = quizForm;

  const handleInputChange = (propName) => (e) => {
    const formState = {};
    formState[propName] = e.target.value;

    dispatch(setQuizForm(formState));
  };

  return (
    <>
      <div css={styles.text}>문제</div>
      <Textarea
        value={question}
        onChange={handleInputChange('question')}
        emotion={{ ...styles.input, ...styles.question }}
      />
      <div css={styles.text}>정답</div>
      <Textarea
        value={answer}
        onChange={handleInputChange('answer')}
        emotion={{ ...styles.input, ...styles.answer }}
      />
      <Textarea
        value={tagString}
        onChange={handleInputChange('tagString')}
        emotion={styles.tag}
      />
    </>
  );
}
