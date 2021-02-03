import React from 'react';

import { color } from '../../static';

const styles = {
  layout: {
    padding: '1rem 3rem',
    boxShadow: `0 0 7px 1px ${color.faintWhite}`,
    borderRadius: '1rem',
    marginTop: '0.5rem',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: color.main,
    },
    '@media (max-width: 960px)': {
      padding: '1rem 5vw',
    },
  },
};

export default function ArchiveItem({ question, onClick }) {
  return (
    <div onClick={onClick} css={styles.layout}>
      <div>Q. {question}</div>
    </div>
  );
}
