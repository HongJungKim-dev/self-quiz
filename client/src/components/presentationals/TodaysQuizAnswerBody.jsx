import React from 'react';

import { size } from '../../static';

const styles = {
  answer: {
    display: 'block',
    width: '100%',
    height: '75%',
    backgroundColor: 'white',
    fontSize: size.text,
    resize: 'none',
    padding: '1rem 2rem',
    boxSizing: 'border-box',
    border: 'none',
  },
};

export default function TodaysQuizAnswerBody({ quiz }) {
  return (
    <textarea
      value={quiz.answer}
      css={styles.answer}
      disabled="disabled"
    />
  );
}
