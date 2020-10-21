import React from 'react';

import { useSelector } from 'react-redux';

import Textarea from './Textarea';

const styles = {
  layout: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '40rem',
    height: '40rem',
    color: 'black',
    background: 'white',
    borderRadius: '0.5rem',
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
  },
  container: {
    padding: '2rem',
  },
  tag: {
    marginTop: '2rem',
    textAlign: 'end',
  },
};

export default function ArchiveQuizModal() {
  const { archive } = useSelector(({ selfQuizReducer }) => selfQuizReducer.modal);

  const isArchiveEmpty = Object.keys(archive).length === 0;

  if (isArchiveEmpty) {
    return <></>;
  }

  const { question, answer, tags } = archive;

  return (
    <div css={styles.layout}>
      <div css={styles.title}>Quiz</div>
      <div css={styles.container}>
        <div css={styles.text}>문제</div>
        <Textarea
          value={question}
          emotion={{ ...styles.input, height: '7rem' }}
          disabled="disabled"
        />
        <div css={styles.text}>정답</div>
        <Textarea
          value={answer}
          emotion={{ ...styles.input, height: '16rem' }}
          disabled="disabled"
        />
        <div css={styles.tag}>{tags.map((tag) => `#${tag} `)}</div>
      </div>
    </div>
  );
}
