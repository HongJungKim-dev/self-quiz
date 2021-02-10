import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadQuizzes } from '../slice';

import BackButtonContainer from '../components/containers/BackButtonContainer';
import ArchiveModalContainer from '../components/containers/ArchiveModalContainer';
import ArchiveContainer from '../components/containers/ArchiveContainer';

export default function ArchivePage() {
  const dispatch = useDispatch();
  const { quizzes, modal } = useSelector((state) => state);
  const { archive, editting } = modal;

  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(loadQuizzes());
    }
  }, []);

  return (
    <>
      <BackButtonContainer />
      {archive && <ArchiveModalContainer isEditMode={editting} />}
      <ArchiveContainer />
    </>
  );
}
