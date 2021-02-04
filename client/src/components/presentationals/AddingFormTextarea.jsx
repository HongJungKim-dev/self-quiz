import React from 'react';

import { size } from '../../static';

const style = {
  display: 'block',
  width: '100%',
  height: '8rem',
  fontSize: size.smallText,
  padding: '0.7rem',
  boxSizing: 'border-box',
  borderRadius: '0.4rem',
  resize: 'none',
};

export default function AddingFormTextarea({
  value, onChange, placeholder = '',
}) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      css={style}
      placeholder={placeholder}
    />
  );
}
