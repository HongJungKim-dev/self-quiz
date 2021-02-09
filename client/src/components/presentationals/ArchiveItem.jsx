import React from 'react';

import { color, size } from '../../static';

const styles = {
  layout: {
    padding: '1rem 3rem',
    boxShadow: `0 0 3px 1px ${color.faintWhite}`,
    borderRadius: '1rem',
    marginTop: '0.5rem',
    color: color.font,
    cursor: 'pointer',
    fontSize: size.smallText,
    '&:hover': {
      backgroundColor: color.main,
    },
    '@media (max-width: 768px)': {
      padding: '2rem 3rem',
      fontSize: '3rem',
      marginTop: '1.5rem',
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
