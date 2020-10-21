import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { popupMessages } from '../util';

import {
  setArchiveQuizModal, setOverlay, removeQuiz, setEdittingModal,
} from '../slice';

import api from '../apis/api';

import Button from './Button';

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
  },
};

export default function ArchiveQuizModalButtonContainer() {
  const dispatch = useDispatch();
  const { modal } = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { archive } = modal;

  const { _id } = archive;

  const handleEditButton = async () => {
    dispatch(setEdittingModal(true));
  };

  const handleDeleteButton = async () => {
    const success = await api.deleteQuiz(_id);

    if (!success) {
      await popupMessages.fail('삭제하지 못했습니다. 다시 시도해주세요.');
      return;
    }

    await popupMessages.success('해당 퀴즈를 삭제하였습니다.');
    dispatch(setArchiveQuizModal({}));
    dispatch(removeQuiz(_id));
    dispatch(setOverlay(false));
  };

  return (
    <>
      <Button
        title="수정"
        onClick={handleEditButton}
        emotion={{ ...styles.button, background: '#244a72' }}
      />
      <Button
        title="삭제"
        onClick={handleDeleteButton}
        emotion={{ ...styles.button, background: 'black' }}
      />
    </>
  );
}
