import React from 'react';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { setArchiveQuizModal, setOverlay } from '../../slice';

import { convertTagsToTagString } from '../../util';

import ArchiveQuizModal from '../ArchiveQuizModal';
import ArchiveEditModal from '../ArchiveEditModal';

import ArchiveItems from '../presentationals/ArchiveItems';
import ArchiveBackButton from '../presentationals/ArchiveBackButton';
import ArchiveLayout from '../layouts/ArchiveLayout';

export default function ArchiveContainer() {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  const dispatch = useDispatch();
  const { quizzes, modal } = useSelector((state) => state);
  const { archive, editting } = modal;
  const isArchiveFilled = Object.keys(archive).length > 0;

  const handleItemClick = (quiz) => () => {
    const {
      question, answer, lastSolved, layer, tags, _id,
    } = quiz;

    const tagString = convertTagsToTagString(tags);

    dispatch(setArchiveQuizModal({
      question, answer, lastSolved, layer, tagString, _id,
    }));
    dispatch(setOverlay(true));
  };

  return (
    <ArchiveLayout>
      <ArchiveBackButton onClick={handleBackButtonClick} />
      {isArchiveFilled && <ArchiveQuizModal />}
      {editting && <ArchiveEditModal />}
      <ArchiveItems
        quizzes={quizzes}
        handleItemClick={handleItemClick}
      />
    </ArchiveLayout>
  );
}
