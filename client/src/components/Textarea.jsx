import React from 'react';

export default function Textarea({ value, onChange, emotion }) {
  return (
    <textarea onChange={onChange} value={value} css={emotion} />
  );
}
