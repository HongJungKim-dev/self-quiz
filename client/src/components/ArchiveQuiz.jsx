import React from 'react';

const styles = {
  layout: {
    width: '40rem',
    padding: '1rem 3rem',
    boxShadow: '0 0 7px 1px #cfcfcf',
    borderRadius: '1rem',
    marginTop: '0.5rem',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      background: 'black',
    },
  },
};

export default function ArchiveQuiz({ quiz }) {
  const {
    question, answer, lastSolved, layer, tags,
  } = quiz;

  return (
    <div css={styles.layout}>
      <div>Q. {question}</div>
    </div>
  );
}
