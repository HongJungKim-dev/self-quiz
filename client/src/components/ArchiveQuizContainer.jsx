import React from 'react';

import ArchiveQuiz from './ArchiveQuiz';

export default function ArchiveQuizContainer({ quiz }) {
  const handleQuizClick = () => {

  };

  return (
    <ArchiveQuiz
      quiz={quiz}
      onClick={handleQuizClick}
    />
  );
}
