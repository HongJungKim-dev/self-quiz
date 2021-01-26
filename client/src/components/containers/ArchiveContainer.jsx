import React from 'react';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { setArchiveQuizModal, setOverlay, setQuizForm } from '../../slice';

import { convertTagsToTagString } from '../../util';

import ArchiveItems from '../presentationals/ArchiveItems';
import ArchiveBackButton from '../presentationals/ArchiveBackButton';
import ArchiveLayout from '../layouts/ArchiveLayout';

export default function ArchiveContainer() {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);

  const handleItemClick = (quiz) => () => {
    const {
      question, answer, lastSolved, layer, tags, _id,
    } = quiz;

    const tagString = convertTagsToTagString(tags);

    dispatch(setArchiveQuizModal({
      question, answer, lastSolved, layer, tagString, _id,
    }));
    dispatch(setQuizForm({ question, answer, tagString }));
    dispatch(setOverlay(true));
  };

  return (
    <ArchiveLayout>
      <ArchiveBackButton onClick={handleBackButtonClick} />
      <ArchiveItems
        quizzes={quizzes}
        handleItemClick={handleItemClick}
      />
    </ArchiveLayout>
  );
}
