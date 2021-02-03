import React from 'react';

import { colors, size } from '../../static';

const style = {
  width: '100%',
  marginTop: '2rem',
  height: '3rem',
  fontSize: size.smallTitle,
  fontWeight: 'bold',
  color: 'white',
  background: `${colors.main}`,
  border: 'none',
  borderRadius: '0.5rem',
};

export default function AddingFormButton({ title, onClick }) {
  return (
    <button onClick={onClick} css={style} type="button">
      {title}
    </button>
  );
}
