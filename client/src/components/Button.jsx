import React from 'react';

export default function Button({ buttonName, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {buttonName}
    </button>
  );
}
