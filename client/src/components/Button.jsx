import React from 'react';

export default function Button({ title, onClick, emotion }) {
  return (
    <button type="button" onClick={onClick} css={emotion}>
      {title}
    </button>
  );
}
