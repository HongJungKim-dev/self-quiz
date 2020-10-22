import React from 'react';

import { useDispatch } from 'react-redux';

import {
  setOverlay, setAddingModal, setArchiveQuizModal,
  setEdittingModal, setTodaysQuizModal, resetQuizForm,
} from '../slice';

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

  // TODO: 하나로 합치기
  const handleOverlay = () => {
    dispatch(setOverlay(false));
    dispatch(setAddingModal(false));
    dispatch(setArchiveQuizModal({}));
    dispatch(setEdittingModal(false));
    dispatch(setTodaysQuizModal(false));
    dispatch(resetQuizForm());
  };

  return (
    <div onClick={handleOverlay} css={styles.overlay} />
  );
}
