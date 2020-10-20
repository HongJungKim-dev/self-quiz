import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizzes } from '../slice';

import api from '../apis/quiz';

import { popupMessages } from '../util';

import Button from './Button';

const styles = {
  button: {
    width: '100%',
    marginTop: '1rem',
    height: '3rem',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: 'white',
    background: '#3e7cbc',
  },
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const formData = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizForm);
  const { question, answer, tags } = formData;

  const handleLoginButtonClick = async () => {
    const newQuiz = await api.addQuiz(question, answer, tags);

    if (!newQuiz) {
      await popupMessages.fail('실패했습니다. 다시 시도해주세요.');
      return;
    }

    await popupMessages.success('추가되었습니다.');
    dispatch(setQuizzes(newQuiz));
  };

  return (
    <Button
      title="확인"
      onClick={handleLoginButtonClick}
      emotion={styles.button}
    />
  );
}
