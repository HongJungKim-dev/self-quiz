import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { popupMessages, convertTagStringToTags } from '../util';

import { editQuiz, closeAllModal } from '../slice';

import api from '../apis/api';

import Button from './Button';

const styles = {
  button: {
    width: '100%',
    height: '2rem',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '0.4rem',
    cursor: 'pointer',
  },
};

export default function ArchiveEditModalButtonContainer() {
  const dispatch = useDispatch();
  const { modal, quizForm } = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { archive } = modal;
  const { question, answer, tagString } = quizForm;

  const { _id } = archive;

  const handleEditButton = async () => {
    const tags = convertTagStringToTags(tagString);
    const success = await api.editQuiz(_id, question, answer, tags);

    if (!success) {
      await popupMessages.fail('수정하지 못했습니다. 다시 시도해주세요.');
      return;
    }

    await popupMessages.success('해당 퀴즈를 수정하였습니다.');
    dispatch(closeAllModal());
    dispatch(editQuiz({
      _id, question, answer, tagString,
    }));
  };

  return (
    <Button
      title="수정"
      emotion={{ ...styles.button, background: '#244a72' }}
      onClick={handleEditButton}
    />
  );
}
