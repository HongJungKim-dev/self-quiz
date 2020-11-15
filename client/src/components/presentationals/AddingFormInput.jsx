import React from 'react';

const style = {
  display: 'block',
  width: '100%',
  height: '3rem',
  fontSize: '1rem',
  padding: '0.7rem',
  boxSizing: 'border-box',
  border: '1px solid #767676',
  borderRadius: '0.4rem',
};

export default function AddingFormInput({
  value, onChange, placeholder = '',
}) {
  return (
    <input
      onChange={onChange}
      value={value}
      css={style}
      placeholder={placeholder}
    />
  );
}
