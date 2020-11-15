import React from 'react';

const style = {
  display: 'block',
  width: '100%',
  height: '8rem',
  fontSize: '1rem',
  padding: '0.7rem',
  boxSizing: 'border-box',
  borderRadius: '0.4rem',
  resize: 'none',
  '@media (max-width: 720px)': {
    height: '10vh',
  },
};

export default function AddingFormTextarea({
  value, onChange, placeholder = '',
}) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      css={style}
      placeholder={placeholder}
    />
  );
}
