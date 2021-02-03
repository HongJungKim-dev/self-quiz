import React from 'react';

import { colors } from '../../static';

const style = {
  border: 'none',
  borderRadius: '1rem',
  width: '20rem',
  height: '20rem',
  margin: '0.5rem',
  boxShadow: `0 0 6px 0px ${colors.faintWhite}`,
  background: 'linear-gradient(45deg, black, transparent)',
  color: 'white',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  '&:hover': {
    background: `${colors.main}`,
    cursor: 'pointer',
  },
  '@media (max-width: 960px)': {
    height: '30vw',
  },
  '@media (max-width: 680px)': {
    fontSize: '3vw',
  },
};

export default function TabButton({ title, onClick }) {
  return (
    <button type="button" onClick={onClick} css={style}>
      {title}
    </button>
  );
}
