import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizFormQuestion, setQuizFormAnswer, setQuizFormTags } from '../slice';

import Textarea from './Textarea';

const styles = {
  input: {
    display: 'block',
    width: '100%',
    height: '8rem',
    fontSize: '1rem',
    padding: '0.7rem',
    boxSizing: 'border-box',
  },
  tags: {
    height: '3rem',
  },
};

export default function QuizFormInputContainer() {
  const dispatch = useDispatch();
  const { question, answer } = useSelector(({ selfQuizReducer }) => selfQuizReducer.quizForm);

  const handleQuizFormQuestionInput = (event) => {
    dispatch(setQuizFormQuestion(event.target.value));
  };

  const handleQuizFormAnswerInput = (event) => {
    dispatch(setQuizFormAnswer(event.target.value));
  };

  const handleQuizFormTagsInput = (event) => {
    const string = event.target.value;
    const tags = string.split('#').map((tag) => tag.trim()).filter((v) => v);

    dispatch(setQuizFormTags(tags));
  };

  return (
    <>
      <Textarea
        value={question}
        onChange={handleQuizFormQuestionInput}
        emotion={styles.input}
      />
      <Textarea
        value={answer}
        onChange={handleQuizFormAnswerInput}
        emotion={styles.input}
      />
      <Textarea
        onChange={handleQuizFormTagsInput}
        emotion={{ ...styles.input, ...styles.tags }}
      />
    </>
  );
}
