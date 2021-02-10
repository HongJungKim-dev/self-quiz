import React from 'react';
import { mobileSize, size } from '../../static';

const styles = {
  readModeTag: {
    margin: '1rem 0',
    height: '2rem',
    fontSize: size['#5'],
    '@media (max-width: 768px)': {
      height: '8rem',
      fontSize: mobileSize['#4'],
      margin: '2rem 0',
    },
  },
  editModeTag: {
    margin: '0.8rem 0',
    width: '100%',
    height: '2rem',
    fontSize: size['#5'],
    border: '1px solid #767676',
    borderRadius: '0.4rem',
    padding: '0.1rem 0.4rem 0 0.4rem',
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      height: '8rem',
      fontSize: mobileSize['#4'],
      margin: '2rem 0',
    },
  },
};

export default function ArchiveModalTag({ isEditMode, quizForm, onChange }) {
  if (isEditMode) {
    return (
      <input
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
