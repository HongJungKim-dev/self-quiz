import React from 'react';

import ArchiveTitle from './ArchiveTitle';
import ArchiveItem from './ArchiveItem';

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '0 0 10rem 0',
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
