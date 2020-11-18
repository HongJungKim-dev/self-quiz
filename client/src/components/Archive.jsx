import React from 'react';

import { useSelector } from 'react-redux';

import ArchiveReturnButtonContainer from './ArchiveReturnButtonContainer';
import ArchiveQuizContainer from './ArchiveQuizContainer';
import ArchiveQuizModal from './ArchiveQuizModal';
import ArchiveEditModal from './ArchiveEditModal';

const styles = {
  body: {
    background: 'linear-gradient(90deg, #111d2a, #295582 )',
    width: '100%',
  },
  layout: {
    display: 'table',
    margin: '0 auto',
    padding: '0 0 10rem 0',
    width: '50rem',
    '@media (max-width: 960px)': {
      width: '85vw',
      fontSize: '2vw',
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    margin: '10rem 0 3rem 0',
    width: '100%',
  },
};

export default function Archive() {
  const { quizzes, modal } = useSelector((state) => state);
  const { archive, editting } = modal;
  const isArchiveFilled = Object.keys(archive).length > 0;

  return (
    <div css={styles.body}>
      <ArchiveReturnButtonContainer />
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
    </div>
  );
}
