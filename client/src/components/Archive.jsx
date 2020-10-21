import React from 'react';

import { useSelector } from 'react-redux';

import ArchiveQuizContainer from './ArchiveQuizContainer';
import ArchiveQuizModal from './ArchiveQuizModal';
import ArchiveEditModal from './ArchiveEditModal';

const styles = {
  layout: {
    display: 'table',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    margin: '3rem 0',
  },
};

export default function Archive() {
  const { quizzes, modal } = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { archive, editting } = modal;
  const isArchiveFilled = Object.keys(archive).length > 0;

  return (
    <>
      {isArchiveFilled && <ArchiveQuizModal />}
      {editting && <ArchiveEditModal />}
      <div css={styles.layout}>
        <div css={styles.title}>아카이브</div>
        {quizzes.map((quiz) => (
          <div key={quiz._id}>
            <ArchiveQuizContainer quiz={quiz} />
          </div>
        ))}
      </div>
    </>
  );
}
