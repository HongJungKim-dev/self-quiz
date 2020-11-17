import React from 'react';

const style = {
  border: 'none',
  borderRadius: '1rem',
  width: '20rem',
  height: '20rem',
  margin: '0.5rem',
  boxShadow: '0 0 6px 0px #ffffff',
  background: 'linear-gradient(45deg, black, transparent)',
  color: 'white',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  '&:hover': {
    background: '#3e7cbc54',
    cursor: 'pointer',
  },
  '&:focus': {
    background: '#3e7cbc54',
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
