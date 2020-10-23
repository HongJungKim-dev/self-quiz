import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addQuiz, resetQuizForm } from '../slice';

import api from '../apis/api';

import { popupMessages, convertTagStringToTags } from '../util';

import Button from './Button';

const styles = {
  button: {
    width: '100%',
    marginTop: '2rem',
    height: '3rem',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: 'white',
    background: '#244a72',
    border: 'none',
    borderRadius: '0.5rem',
  },
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const quizForm = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizForm);
  const { question, answer, tagString } = quizForm;

  const handleLoginButtonClick = async () => {
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
    <Button
      title="확인"
      onClick={handleLoginButtonClick}
      emotion={styles.button}
    />
  );
}
