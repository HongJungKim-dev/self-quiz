import React from 'react';

export default function Input({
  value, onChange, emotion, placeholder = '', type = 'text',
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      css={emotion}
      placeholder={placeholder}
    />
  );
}
