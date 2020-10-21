import React from 'react';

import { useDispatch } from 'react-redux';

import { setOverlay, setAddingModal } from '../slice';

const styles = {
  overlay: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    background: '#00000070',
  },
};

export default function Overlay() {
  const dispatch = useDispatch();

  const handleOverlay = () => {
    dispatch(setOverlay(false));
    dispatch(setAddingModal(false));
  };

  return (
    <div onClick={handleOverlay} css={styles.overlay} />
  );
}
