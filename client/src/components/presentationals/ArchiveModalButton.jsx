import React from 'react';

import { colors, size } from '../../static';

const styles = {
  button: {
    width: '50%',
    height: '2rem',
    border: 'none',
    color: 'white',
    fontSize: size.smallText,
    fontWeight: 'bold',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    background: `${colors.main}`,
    outline: 'none',
  },
};

export default function ArchiveModalButton({
  isEditMode, handleEditButton, handleDeleteButton, handleEditCompleteButton,
}) {
  if (isEditMode) {
    return (
      <button
        type="button"
        onClick={handleEditCompleteButton}
        css={{ ...styles.button, width: '100%' }}
      >
        수정
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleEditButton}
        css={{ ...styles.button }}
      >
        수정
      </button>
      <button
        type="button"
        onClick={handleDeleteButton}
        css={{ ...styles.button, background: 'black' }}
      >
        삭제
      </button>
    </>
  );
}
