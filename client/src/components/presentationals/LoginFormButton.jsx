import React from 'react';

import { color, mobileSize, size } from '../../static';

const style = {
  fontSize: size['#5'],
  fontWeight: 'bold',
  color: color.font,
  width: '100%',
  height: '3rem',
  border: 'none',
  borderRadius: '0.5rem',
  marginTop: '0.5rem',
  cursor: 'pointer',
  '@media (max-width: 768px)': {
    fontSize: mobileSize['#6'],
    height: '6rem',
  },
  '@media (max-width: 480px)': {
    fontSize: mobileSize['#4'],
    height: '10rem',
    marginTop: '2rem',
  },
};

export default function LoginButton({ title, onClick }) {
  style.backgroundColor = title === '로그인' ? color.main : color.light;

  return (
    <button type="button" onClick={onClick} css={style}>
      {title}
    </button>
  );
}
