import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizFormQuestion, setQuizFormAnswer, setQuizFormTags } from '../slice';

import Textarea from './Textarea';

const styles = {
  title: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginTop: '1rem',
  },
  input: {
    display: 'block',
    width: '100%',
    height: '8rem',
    fontSize: '1rem',
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
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
      <div css={styles.title}>문제</div>
      <Textarea
        value={question}
        onChange={handleQuizFormQuestionInput}
        emotion={styles.input}
        placeholder="문제를 입력해주세요."
      />
      <div css={styles.title}>정답</div>
      <Textarea
        value={answer}
        onChange={handleQuizFormAnswerInput}
        emotion={styles.input}
        placeholder="정답을 입력해주세요."
      />
      <div css={styles.title}>#태그</div>
      <Textarea
        onChange={handleQuizFormTagsInput}
        emotion={{ ...styles.input, ...styles.tags }}
        placeholder="#오늘의 #문제"
      />
    </>
  );
}
