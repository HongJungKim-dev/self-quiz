import React from 'react';

import { color, mobileSize, size } from '../../static';

import Loading from './Loading';

const style = {
  width: '100%',
  marginTop: '2rem',
  height: '3rem',
  fontSize: size['#3'],
  fontWeight: 'bold',
  color: color.font,
  backgroundColor: color.main,
  border: 'none',
  borderRadius: '0.5rem',
  '@media (max-width: 768px)': {
    height: '10rem',
    fontSize: mobileSize['#3'],
    marginTop: '4rem',
    borderRadius: '1.5rem',
  },
};

export default function AddingFormButton({ title, onClick, isLoading }) {
  return (
    <button onClick={onClick} css={style} type="button" disabled={isLoading}>
      {isLoading ? <Loading size={20} /> : title}
    </button>
  );
}
