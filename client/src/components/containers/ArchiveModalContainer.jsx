import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setModalState,
  removeQuiz,
  editQuiz,
  closeAllModal,
  setQuizForm,
} from '../../slice';

import { popupMessages, convertTagStringToTags } from '../../util';

import api from '../../apis/api';

import ModalLayout from '../layouts/ModalLayout';
import ArchiveModalQuestion from '../presentationals/ArchiveModalQuestion';
import ArchiveModalAnswer from '../presentationals/ArchiveModalAnswer';
import ArchiveModalTag from '../presentationals/ArchiveModalTag';
import ArchiveModalButton from '../presentationals/ArchiveModalButton';

export default function ArchiveModalContainer({ isEditMode }) {
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const dispatch = useDispatch();

  const quizForm = useSelector((state) => state.form.quiz);

  const {
    _id, question, answer, tagString,
  } = quizForm;

  const handleInputChange = (propName) => {
    if (!isEditMode) {
      return () => {};
    }

    return (e) => {
      const formState = {};
      formState[propName] = e.target.value;

      dispatch(setQuizForm(formState));
    };
  };

  const handleEditButton = async () => {
    dispatch(setModalState({ type: 'editting', showing: true }));
  };

  const handleDeleteButton = async () => {
    setIsDeleteLoading(true);

    const success = await api.deleteQuiz(_id);

    setIsDeleteLoading(false);

    if (!success) {
      await popupMessages.fail('삭제하지 못했습니다. 다시 시도해주세요.');
      return;
    }

    await popupMessages.success('해당 퀴즈를 삭제하였습니다.');
    dispatch(removeQuiz(_id));
    dispatch(setModalState({ type: 'archive', showing: false }));
  };

  const handleEditCompleteButton = async () => {
    setIsEditLoading(true);

    const tags = convertTagStringToTags(tagString);
    const success = await api.editQuiz(_id, question, answer, tags);

    setIsEditLoading(false);

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
    <ModalLayout title="Quiz">
      <ArchiveModalQuestion
        isEditMode={isEditMode}
        quizForm={quizForm}
        onChange={handleInputChange('question')}
      />
      <ArchiveModalAnswer
        isEditMode={isEditMode}
        quizForm={quizForm}
        onChange={handleInputChange('answer')}
      />
      <ArchiveModalTag
        isEditMode={isEditMode}
        quizForm={quizForm}
        onChange={handleInputChange('tagString')}
      />
      <ArchiveModalButton
        isEditMode={isEditMode}
        isEditLoading={isEditLoading}
        isDeleteLoading={isDeleteLoading}
        handleEditButton={handleEditButton}
        handleDeleteButton={handleDeleteButton}
        handleEditCompleteButton={handleEditCompleteButton}
      />
    </ModalLayout>
  );
}
