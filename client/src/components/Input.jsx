import React from 'react';

export default function Input({ inputValue, onChange }) {
  return (
    <input type="text" onChange={onChange} value={inputValue} />
  );
}
