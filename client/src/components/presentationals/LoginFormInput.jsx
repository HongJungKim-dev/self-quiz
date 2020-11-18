import React from 'react';

const style = {
  display: 'block',
  fontSize: '1rem',
  width: '96%',
  height: '3rem',
  border: 'none',
  borderBottom: '1px solid #3e7cbc',
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
