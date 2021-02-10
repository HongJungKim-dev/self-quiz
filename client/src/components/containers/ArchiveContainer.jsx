import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setArchiveQuizModal, setOverlay, setQuizForm } from '../../slice';

import { convertTagsToTagString } from '../../util';

import ArchiveItems from '../presentationals/ArchiveItems';
import ArchiveLayout from '../layouts/ArchiveLayout';

export default function ArchiveContainer() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);

  const handleItemClick = (quiz) => () => {
    const {
      question, answer, tags, _id,
    } = quiz;

    const tagString = convertTagsToTagString(tags);

    dispatch(setQuizForm({
      _id, question, answer, tagString,
    }));
    dispatch(setArchiveQuizModal(true));
    dispatch(setOverlay(true));
  };

  return (
    <ArchiveLayout>
      <ArchiveItems
        quizzes={quizzes}
        handleItemClick={handleItemClick}
      />
    </ArchiveLayout>
  );
}
