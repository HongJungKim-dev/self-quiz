import React from 'react';

import QuizFormInputContainer from './QuizFormInputContainer';
import QuizFormButtonContainer from './QuizFormButtonContainer';

const styles = {
  layout: {
    display: 'table',
    position: 'absolute',
    width: '40rem',
    height: '40rem',
    margin: '5rem auto',
    borderRadius: '0.5rem',
    background: 'white',
    boxShadow: '0 0 11px 0px #3e7cbc',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: '#3e7cbc',
    color: 'white',
    padding: '0.4rem 1rem',
    boxSizing: 'border-box',
    borderRadius: '0.5rem 0.5rem 0 0',
  },
  container: {
    padding: '2rem',
  },
};

export default function QuizForm() {
  return (
    <div css={styles.layout}>
      <div css={styles.title}>문제 만들기</div>
      <div css={styles.container}>
        <QuizFormInputContainer />
        <QuizFormButtonContainer />
      </div>
    </div>
  );
}
