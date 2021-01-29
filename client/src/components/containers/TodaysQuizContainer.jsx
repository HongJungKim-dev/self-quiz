import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setTodaysAnswerOn, removeTodaysQuiz, setAnswerForm } from '../../slice';

import api from '../../apis/api';

import TodaysQuiz from '../presentationals/TodaysQuiz';

const styles = {
  layout: {
    width: '80vw',
    maxWidth: '80rem',
    height: '100vh',
    margin: '0 auto',
  },
};

export default function TodaysQuizContainer() {
  const dispatch = useDispatch();
  const todays = useSelector((state) => state.todays);
  const targetQuiz = todays.quizzes[0] || { question: '', answer: '', tags: [] };

  const handleShowAnswerButton = () => {
    dispatch(setTodaysAnswerOn(true));
  };

  const handlePassButton = async () => {
    await api.passQuiz(targetQuiz._id);
    dispatch(removeTodaysQuiz(targetQuiz._id));
    dispatch(setTodaysAnswerOn(false));
    dispatch(setAnswerForm(''));
  };

  const handleFailButton = async () => {
    await api.failQuiz(targetQuiz._id);
    dispatch(removeTodaysQuiz(targetQuiz._id));
    dispatch(setTodaysAnswerOn(false));
    dispatch(setAnswerForm(''));
  };

  return (
    <div css={styles.layout}>
      <TodaysQuiz
        quiz={targetQuiz}
        answerOn={todays.answerOn}
        onAnswerClick={handleShowAnswerButton}
        onPassClick={handlePassButton}
        onKeepClick={() => {}}
        onFailClick={handleFailButton}
      />
    </div>
  );
}
