import React from 'react';

import ModalLayout from './layouts/ModalLayout';
import ArchiveQuizModalInputContainer from './ArchiveQuizModalInputContainer';
import ArchiveQuizModalButtonContainer from './ArchiveQuizModalButtonContainer';

export default function ArchiveQuizModal() {
  return (
    <ModalLayout title="Quiz">
      <ArchiveQuizModalInputContainer />
      <ArchiveQuizModalButtonContainer />
    </ModalLayout>
  );
}
