import React from 'react';

import { mobileSize, size } from '../../static';

const style = {
  display: 'block',
  width: '100%',
  height: '3rem',
  fontSize: size['#5'],
  padding: '0.7rem',
  boxSizing: 'border-box',
  border: '1px solid #767676',
  borderRadius: '0.4rem',
  '@media (max-width: 768px)': {
    height: '8rem',
    fontSize: mobileSize['#4'],
    borderRadius: '1.4rem',
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
