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
    padding: '3rem',
    borderRadius: '1rem',
    boxShadow: '0 0 11px 0px #3e7cbc',
  },
};

export default function QuizForm() {
  return (
    <div css={styles.layout}>
      <QuizFormInputContainer />
      <QuizFormButtonContainer />
    </div>
  );
}
