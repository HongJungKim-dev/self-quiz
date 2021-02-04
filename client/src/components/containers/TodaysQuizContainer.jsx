import React from 'react';

import { Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { setTodaysAnswerOn, removeTodaysQuiz } from '../../slice';

import { popupMessages } from '../../util';

import api from '../../apis/api';

import TodaysQuiz from '../presentationals/TodaysQuiz';
import TodaysQuizLayout from '../layouts/TodaysQuizLayout';

export default function TodaysQuizContainer() {
  const dispatch = useDispatch();
  const todays = useSelector((state) => state.todays);
  const targetQuiz = todays.quizzes[0];

  const handleShowAnswerButton = () => {
    dispatch(setTodaysAnswerOn(true));
  };

  const handlePassButton = () => {
    api.passQuiz(targetQuiz._id);
    dispatch(removeTodaysQuiz(targetQuiz._id));
    dispatch(setTodaysAnswerOn(false));
  };

  const handleKeepButton = () => {
    api.keepQuiz(targetQuiz._id);
    dispatch(removeTodaysQuiz(targetQuiz._id));
    dispatch(setTodaysAnswerOn(false));
  };

  const handleFailButton = () => {
    api.failQuiz(targetQuiz._id);
    dispatch(removeTodaysQuiz(targetQuiz._id));
    dispatch(setTodaysAnswerOn(false));
  };

  if (!targetQuiz) {
    popupMessages.success('오늘의 모든 문제를 다 풀었습니다!', 2000);
    return <Redirect to="/" />;
  }

  return (
    <TodaysQuizLayout>
      <TodaysQuiz
        quiz={targetQuiz}
        answerOn={todays.answerOn}
        onAnswerClick={handleShowAnswerButton}
        onPassClick={handlePassButton}
        onKeepClick={handleKeepButton}
        onFailClick={handleFailButton}
      />
    </TodaysQuizLayout>
  );
}
