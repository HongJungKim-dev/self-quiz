import React from 'react';

export default function Textarea({
  value, onChange, emotion, placeholder = '', disabled = '',
}) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      css={{ ...emotion, resize: 'none' }}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
