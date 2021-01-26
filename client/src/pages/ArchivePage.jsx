import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ArchiveModalContainer from '../components/containers/ArchiveModalContainer';
import ArchiveContainer from '../components/containers/ArchiveContainer';

import { loadQuizzes } from '../slice';

export default function ArchivePage() {
  const dispatch = useDispatch();
  const { quizzes, modal } = useSelector((state) => state);
  const { archive, editting } = modal;
  const isArchiveModalOpened = Object.keys(archive).length > 0;

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
    }
  }, []);

  return (
    <>
      {isArchiveModalOpened && <ArchiveModalContainer isEditMode={editting} />}
      <ArchiveContainer />
    </>
  );
}
