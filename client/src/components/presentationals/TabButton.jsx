import React from 'react';

import { color, size } from '../../static';

const styles = {
  button: {
    border: 'none',
    borderRadius: '1rem',
    width: '18rem',
    height: '17rem',
    margin: '0.5rem',
    boxShadow: `0 0 6px 0px ${color.faintWhite}`,
    background: 'linear-gradient(45deg, black, transparent)',
    color: color.font,
    fontSize: size.text,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: color.light,
      cursor: 'pointer',
    },
  },
  icon: {
    width: '3rem',
    margin: '0 auto',
  },
};

export default function TabButton({ title, onClick, IconComponent }) {
  return (
    <button type="button" onClick={onClick} css={styles.button}>
      <div css={styles.icon}><IconComponent /></div>
      {title}
    </button>
  );
}
