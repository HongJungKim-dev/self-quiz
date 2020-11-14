import React from 'react';

import { useSelector } from 'react-redux';

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
    border: 'none',
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
  container: {
    padding: '2rem',
  },
  tag: {
    margin: '1rem 0',
    '@media (max-width: 720px)': {
      fontSize: '2vw',
    },
  },
};

export default function ArchiveQuizModalInput() {
  const { archive } = useSelector(({ selfQuizReducer }) => selfQuizReducer.modal);
  const { question, answer, tagString } = archive;

  return (
    <>
      <div css={styles.text}>문제</div>
      <Textarea
        value={question}
        emotion={{ ...styles.input, ...styles.question }}
        disabled="disabled"
      />
      <div css={styles.text}>정답</div>
      <Textarea
        value={answer}
        emotion={{ ...styles.input, ...styles.answer }}
        disabled="disabled"
      />
      <div css={styles.tag}>{tagString}</div>
    </>
  );
}
