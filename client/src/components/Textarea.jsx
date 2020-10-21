import React from 'react';

export default function Textarea({
  value, onChange, emotion, placeholder = '',
}) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      css={emotion}
      placeholder={placeholder}
    />
  );
}
