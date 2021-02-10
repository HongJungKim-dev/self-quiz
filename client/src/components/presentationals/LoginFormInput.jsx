import React from 'react';

import { color, size } from '../../static';

const style = {
  display: 'block',
  fontSize: size['#5'],
  width: '96%',
  height: '3rem',
  border: 'none',
  borderBottom: `1px solid ${color.light}`,
  paddingLeft: '1rem',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
    height: '6rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '3rem',
    height: '10rem',
  },
};

export default function LoginFormInput({
  value, onChange, placeholder = '', type = 'text',
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      css={style}
      placeholder={placeholder}
    />
  );
}
