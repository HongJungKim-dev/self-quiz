import React from 'react';

import { mobileSize, size } from '../../static';

const styles = {
  answer: {
    display: 'block',
    width: '100%',
    height: '75%',
    backgroundColor: 'white',
    fontSize: size['#4'],
    resize: 'none',
    padding: '1rem 2rem',
    boxSizing: 'border-box',
    border: 'none',
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#4'],
      padding: '3rem 3rem',
    },
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
