import React from 'react';

import { size } from '../../static';

const styles = {
  answer: {
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    fontSize: size.text,
    resize: 'none',
    padding: '20px 35px',
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
