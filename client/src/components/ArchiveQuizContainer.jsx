import React from 'react';

import { useDispatch } from 'react-redux';

import { setArchiveQuizModal, setOverlay } from '../slice';

import { convertTagsToTagString } from '../util';

import ArchiveQuiz from './ArchiveQuiz';

export default function ArchiveQuizContainer({ quiz }) {
  const dispatch = useDispatch();

  const {
    question, answer, lastSolved, layer, tags, _id,
  } = quiz;

  const handleQuizClick = () => {
    const tagString = convertTagsToTagString(tags);

    dispatch(setArchiveQuizModal({
      question, answer, lastSolved, layer, tagString, _id,
    }));
    dispatch(setOverlay(true));
  };

  return (
    <ArchiveQuiz
      question={question}
      onClick={handleQuizClick}
    />
  );
}
