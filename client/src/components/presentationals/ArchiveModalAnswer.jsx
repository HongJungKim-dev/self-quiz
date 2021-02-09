import React from 'react';

import { size } from '../../static';

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: size.text,
    marginTop: '1rem',
    '@media (max-width: 768px)': {
      fontSize: '3rem',
    },
  },
  textarea: {
    display: 'block',
    width: '100%',
    height: '16rem',
    fontSize: size.smallText,
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
    backgroundColor: 'white',
    resize: 'none',
    '@media (max-width: 768px)': {
      height: '28rem',
      fontSize: '2rem',
    },
  },
};

export default function ArchiveModalAnswer({ isEditMode, quizForm, onChange }) {
  const additionalCSS = isEditMode ? {} : { border: 'none' };
  const disabledProp = isEditMode ? '' : 'disabled';

  return (
    <>
      <div css={styles.text}>정답</div>
      <textarea
        value={quizForm.answer}
        onChange={onChange}
        css={[styles.textarea, additionalCSS]}
        disabled={disabledProp}
      />
    </>
  );
}
