import React from 'react';

import { color, size } from '../../static';

const style = {
  width: '100%',
  marginTop: '2rem',
  height: '3rem',
  fontSize: size.smallTitle,
  fontWeight: 'bold',
  color: color.font,
  backgroundColor: color.main,
  border: 'none',
  borderRadius: '0.5rem',
  '@media (max-width: 768px)': {
    height: '10rem',
    fontSize: '4rem',
    marginTop: '4rem',
    borderRadius: '1.5rem',
  },
};

export default function AddingFormButton({ title, onClick }) {
  return (
    <button onClick={onClick} css={style} type="button">
      {title}
    </button>
  );
}
