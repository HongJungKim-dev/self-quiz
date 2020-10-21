import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { popupMessages } from '../util';

import { setArchiveQuizModal, setOverlay, removeQuiz } from '../slice';

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
    border: 'none',
  },
  container: {
    padding: '2rem',
  },
  tag: {
    marginTop: '2rem',
    textAlign: 'end',
  },
  button: {
    width: '50%',
    height: '2rem',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '0.4rem',
    cursor: 'pointer',
  },
};

export default function ArchiveQuizModal() {
  const dispatch = useDispatch();
  const { modal } = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { archive } = modal;
  const isArchiveEmpty = Object.keys(archive).length === 0;

  if (isArchiveEmpty) {
    return <></>;
  }

  const {
    question, answer, tags, _id,
  } = archive;

  const handleDeleteButton = async () => {
    const success = await api.deleteQuiz(_id);

    if (!success) {
      popupMessages.fail('삭제하지 못했습니다. 다시 시도해주세요.');
      return;
    }

    popupMessages.success('해당 퀴즈를 삭제하였습니다.');
    dispatch(setArchiveQuizModal({}));
    dispatch(removeQuiz(_id));
    dispatch(setOverlay(false));
  };

  return (
    <div css={styles.layout}>
      <div css={styles.title}>Quiz</div>
      <div css={styles.container}>
        <div css={styles.text}>문제</div>
        <Textarea
          value={question}
          emotion={{ ...styles.input, height: '7rem' }}
          disabled="disabled"
        />
        <div css={styles.text}>정답</div>
        <Textarea
          value={answer}
          emotion={{ ...styles.input, height: '16rem' }}
          disabled="disabled"
        />
        <div css={styles.tag}>{tags.map((tag) => `#${tag} `)}</div>
        <Button
          title="수정"
          emotion={{ ...styles.button, background: '#244a72' }}
        />
        <Button
          title="삭제"
          emotion={{ ...styles.button, background: 'black' }}
          onClick={handleDeleteButton}
        />
      </div>
    </div>
  );
}
