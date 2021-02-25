import React from 'react';

import { useDispatch } from 'react-redux';

import { resetQuizForm, closeAllModal } from '../slice';

const styles = {
  overlay: {
    width: '100%',
    position: 'fixed',
    height: '100%',
    backgroundColor: '#00000070',
    zIndex: 1,
  },
};

export default function Overlay() {
  const dispatch = useDispatch();

  const handleOverlay = () => {
    dispatch(closeAllModal());
    dispatch(resetQuizForm());
  };

  return (
    <div onClick={handleOverlay} css={styles.overlay} />
  );
}
