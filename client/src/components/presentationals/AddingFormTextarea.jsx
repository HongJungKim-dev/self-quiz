import React from 'react';

import { size } from '../../static';

const style = {
  display: 'block',
  width: '100%',
  height: '8rem',
  fontSize: size['#5'],
  padding: '0.7rem',
  boxSizing: 'border-box',
  borderRadius: '0.4rem',
  resize: 'none',
  '@media (max-width: 768px)': {
    height: '24rem',
    fontSize: '3rem',
    borderRadius: '1.4rem',
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
