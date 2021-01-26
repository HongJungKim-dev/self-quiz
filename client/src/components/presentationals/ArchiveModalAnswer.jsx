import React from 'react';

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginTop: '1rem',
  },
  textarea: {
    display: 'block',
    width: '100%',
    height: '16rem',
    fontSize: '1rem',
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
    background: 'white',
    resize: 'none',
    '@media (max-width: 720px)': {
      height: '32vw',
      fontSize: '2vw',
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
