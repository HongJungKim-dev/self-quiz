import React from 'react';

import { colors } from '../../static';

const style = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: 'white',
  width: '100%',
  height: '3rem',
  border: 'none',
  borderRadius: '0.5rem',
  marginTop: '0.5rem',
  cursor: 'pointer',
};

export default function LoginButton({ title, onClick }) {
  style.backgroundColor = title === '로그인' ? colors.main : colors.light;

  return (
    <button type="button" onClick={onClick} css={style}>
      {title}
    </button>
  );
}
