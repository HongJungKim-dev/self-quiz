import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setQuizForm } from '../slice';

import ModalLayout from './layouts/ModalLayout';
import ArchiveEditModalInputContainer from './ArchiveEditModalInputContainer';
import ArchiveEditModalButtonContainer from './ArchiveEditModalButtonContainer';

export default function ArchiveEditModal() {
  const dispatch = useDispatch();
  const { archive } = useSelector(({ selfQuizReducer }) => selfQuizReducer.modal);
  const { question, answer, tagString } = archive;

  useEffect(() => {
    dispatch(setQuizForm({ question, answer, tagString }));
  }, []);

  return (
    <ModalLayout title="Quiz">
      <ArchiveEditModalInputContainer />
      <ArchiveEditModalButtonContainer />
    </ModalLayout>
  );
}
