import React from 'react';

import Button from '../Button';

const styles = {
  button: {
    width: '50%',
    height: '2rem',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    background: '#244a72',
    outline: 'none',
  },
};

export default function ArchiveModalButton({
  isEditMode, handleEditButton, handleDeleteButton, handleEditCompleteButton,
}) {
  if (isEditMode) {
    return (
      <Button
        title="수정"
        onClick={handleEditCompleteButton}
        emotion={{ ...styles.button, width: '100%' }}
      />
    );
  }

  return (
    <>
      <Button
        title="수정"
        onClick={handleEditButton}
        emotion={{ ...styles.button }}
      />
      <Button
        title="삭제"
        onClick={handleDeleteButton}
        emotion={{ ...styles.button, background: 'black' }}
      />
    </>
  );
}
