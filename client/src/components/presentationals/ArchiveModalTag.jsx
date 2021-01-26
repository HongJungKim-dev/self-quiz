import React from 'react';

const styles = {
  readModeTag: {
    margin: '1rem 0',
    '@media (max-width: 720px)': {
      fontSize: '2vw',
    },
  },
  editModeTag: {
    margin: '0.8rem 0',
    width: '100%',
    resize: 'none',
    borderRadius: '0.4rem',
    height: '1.5rem',
    padding: '0.1rem 0.4rem 0 0.4rem',
    boxSizing: 'border-box',
    '@media (max-width: 720px)': {
      fontSize: '2vw',
    },
  },
};

export default function ArchiveModalTag({ isEditMode, quizForm, onChange }) {
  if (isEditMode) {
    return (
      <textarea
        value={quizForm.tagString}
        onChange={onChange}
        css={styles.editModeTag}
      />
    );
  }

  return (
    <div css={styles.readModeTag}>{quizForm.tagString}</div>
  );
}
