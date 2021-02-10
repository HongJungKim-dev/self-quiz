import React from 'react';

import { size } from '../../static';

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: size['#4'],
    marginTop: '1rem',
    '@media (max-width: 768px)': {
      fontSize: '4rem',
      marginTop: '2rem',
    },
  },
  textarea: {
    display: 'block',
    width: '100%',
    height: '7rem',
    fontSize: size['#5'],
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
    backgroundColor: 'white',
    resize: 'none',
    '@media (max-width: 768px)': {
      height: '24rem',
      fontSize: '3rem',
    },
  },
};

export default function ArchiveModalQuestion({ isEditMode, quizForm, onChange }) {
  const additionalCSS = isEditMode ? {} : { border: 'none' };
  const disabledProp = isEditMode ? '' : 'disabled';

  return (
    <>
      <div css={styles.text}>문제</div>
      <textarea
        value={quizForm.question}
        onChange={onChange}
        css={[styles.textarea, additionalCSS]}
        disabled={disabledProp}
      />
    </>
  );
}
