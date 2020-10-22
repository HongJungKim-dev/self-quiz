import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { popupMessages } from '../util';

import {
  setArchiveQuizModal, setOverlay, editQuiz, setEdittingModal,
  setQuizFormQuestion, setQuizFormAnswer, setQuizFormTags,
} from '../slice';

import api from '../apis/api';

import Textarea from './Textarea';
import Button from './Button';

const styles = {
  layout: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '40rem',
    height: '40rem',
    color: 'black',
    background: 'white',
    borderRadius: '0.5rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: '#244a72',
    color: 'white',
    padding: '0.4rem 1rem',
    boxSizing: 'border-box',
    borderRadius: '0.5rem 0.5rem 0 0',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginTop: '1rem',
  },
  input: {
    display: 'block',
    width: '100%',
    fontSize: '1rem',
    padding: '0.7rem',
    boxSizing: 'border-box',
    borderRadius: '0.4rem',
    background: 'white',
  },
  container: {
    padding: '2rem',
  },
  tag: {
    margin: '0.8rem 0',
    width: '100%',
    resize: 'none',
    borderRadius: '0.4rem',
    height: '1.5rem',
    padding: '0.1rem 0.4rem 0 0.4rem',
    boxSizing: 'border-box',
  },
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

export default function ArchiveEditModal() {
  const dispatch = useDispatch();
  const { modal, quizForm } = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { archive } = modal;

  const {
    question, answer, tagString, _id,
  } = archive;

  useEffect(() => {
    dispatch(setQuizFormQuestion(question));
    dispatch(setQuizFormAnswer(answer));
    dispatch(setQuizFormTags(tagString));
  }, []);

  const handleQuestionChange = (e) => {
    dispatch(setQuizFormQuestion(e.target.value));
  };

  const handleAnswerChange = (e) => {
    dispatch(setQuizFormAnswer(e.target.value));
  };

  const handleTagChange = (e) => {
    dispatch(setQuizFormTags(e.target.value));
  };

  const handleEditButton = async () => {
    const tags = quizForm.tagString.split('#').map((tag) => tag.trim()).filter((v) => v);
    const success = await api.editQuiz(_id, quizForm.question,
      quizForm.answer, tags);

    if (!success) {
      await popupMessages.fail('수정하지 못했습니다. 다시 시도해주세요.');
      return;
    }

    await popupMessages.success('해당 퀴즈를 수정하였습니다.');
    dispatch(setArchiveQuizModal({}));
    dispatch(setOverlay(false));
    dispatch(setEdittingModal(false));
    dispatch(editQuiz({
      _id,
      question: quizForm.question,
      answer: quizForm.answer,
      tagString: quizForm.tagString,
    }));
  };

  return (
    <div css={styles.layout}>
      <div css={styles.title}>Quiz</div>
      <div css={styles.container}>
        <div css={styles.text}>문제</div>
        <Textarea
          value={quizForm.question}
          onChange={handleQuestionChange}
          emotion={{ ...styles.input, height: '7rem' }}
        />
        <div css={styles.text}>정답</div>
        <Textarea
          value={quizForm.answer}
          onChange={handleAnswerChange}
          emotion={{ ...styles.input, height: '16rem' }}
        />
        <Textarea
          value={quizForm.tagString}
          onChange={handleTagChange}
          emotion={styles.tag}
        />
        <Button
          title="수정"
          emotion={{ ...styles.button, background: '#244a72' }}
          onClick={handleEditButton}
        />
      </div>
    </div>
  );
}
