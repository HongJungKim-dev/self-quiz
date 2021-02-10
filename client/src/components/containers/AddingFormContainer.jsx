import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addQuiz, resetQuizForm, setQuizForm } from '../../slice';

import { convertTagStringToTags, popupMessages } from '../../util';

import api from '../../apis/api';

import ModalLayout from '../layouts/ModalLayout';
import AddingFormSubtitle from '../presentationals/AddingFormSubtitle';
import AddingFormTextarea from '../presentationals/AddingFormTextarea';
import AddingFormInput from '../presentationals/AddingFormInput';
import AddingFormButton from '../presentationals/AddingFormButton';

export default function AddingFormContainer() {
  const dispatch = useDispatch();
  const quizForm = useSelector((state) => state.form.quiz);
  const { question, answer, tagString } = quizForm;

  const handleInputChange = (propName) => (e) => {
    const formState = {};
    formState[propName] = e.target.value;

    dispatch(setQuizForm(formState));
  };

  const handleAddingButtonClick = async () => {
    const tags = convertTagStringToTags(tagString);
    const newQuiz = await api.addQuiz(question, answer, tags);

    if (!newQuiz) {
      await popupMessages.fail('실패했습니다. 다시 시도해주세요.');
      return;
    }

    await popupMessages.success('추가되었습니다.');
    dispatch(addQuiz(newQuiz));
    dispatch(resetQuizForm());
  };

  return (
    <ModalLayout title="문제 만들기">
      <AddingFormSubtitle title="문제" />
      <AddingFormTextarea
        value={question}
        onChange={handleInputChange('question')}
        placeholder="문제를 입력해주세요."
      />
      <AddingFormSubtitle title="정답" />
      <AddingFormTextarea
        value={answer}
        onChange={handleInputChange('answer')}
        placeholder="정답을 입력해주세요."
      />
      <AddingFormSubtitle title="#태그" />
      <AddingFormInput
        value={tagString}
        onChange={handleInputChange('tagString')}
        placeholder="#오늘의 #문제"
      />
      <AddingFormButton
        title="확인"
        onClick={handleAddingButtonClick}
      />
    </ModalLayout>
  );
}
