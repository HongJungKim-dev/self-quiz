import React from 'react';

export default function Input({ value, onChange, emotion }) {
  return (
    <input type="text" onChange={onChange} value={value} css={emotion} />
  );
}
