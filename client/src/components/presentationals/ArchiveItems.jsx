import React from 'react';

import ArchiveTitle from './ArchiveTitle';
import ArchiveItem from './ArchiveItem';

const styles = {
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
};

export default function ArchiveItems({ quizzes, handleItemClick }) {
  return (
    <div css={styles.layout}>
      <ArchiveTitle />
      {quizzes.map((quiz) => (
        <div key={quiz._id}>
          <ArchiveItem
            question={quiz.question}
            onClick={handleItemClick(quiz)}
          />
        </div>
      ))}
    </div>
  );
}
