import React from 'react';

import { size } from '../../static';

const style = {
  display: 'block',
  width: '100%',
  height: '3rem',
  fontSize: size.smallText,
  padding: '0.7rem',
  boxSizing: 'border-box',
  border: '1px solid #767676',
  borderRadius: '0.4rem',
  '@media (max-width: 768px)': {
    height: '5rem',
    fontSize: '2rem',
  },
};

export default function AddingFormInput({
  value, onChange, placeholder = '',
}) {
  return (
    <input
      onChange={onChange}
      value={value}
      css={style}
      placeholder={placeholder}
    />
  );
}
