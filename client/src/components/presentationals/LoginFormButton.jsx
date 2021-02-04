import React from 'react';

import { color, size } from '../../static';

const style = {
  fontSize: size.smallText,
  fontWeight: 'bold',
  color: color.font,
  width: '100%',
  height: '3rem',
  border: 'none',
  borderRadius: '0.5rem',
  marginTop: '0.5rem',
  cursor: 'pointer',
};

export default function LoginButton({ title, onClick }) {
  style.backgroundColor = title === '로그인' ? color.main : color.light;

  return (
    <button type="button" onClick={onClick} css={style}>
      {title}
    </button>
  );
}
