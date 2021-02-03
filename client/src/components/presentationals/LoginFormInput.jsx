import React from 'react';

import { colors } from '../../static';

const style = {
  display: 'block',
  fontSize: '1rem',
  width: '96%',
  height: '3rem',
  border: 'none',
  borderBottom: `1px solid ${colors.light}`,
  paddingLeft: '1rem',
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
