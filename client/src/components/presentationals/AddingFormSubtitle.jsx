import React from 'react';

import { mobileSize, size } from '../../static';

const style = {
  fontWeight: 'bold',
  fontSize: size['#4'],
  marginTop: '1rem',
  '@media (max-width: 768px)': {
    fontSize: mobileSize['#3'],
    marginTop: '2rem',
  },
};

export default function AddingFormSubtitle({ title }) {
  return (
    <div css={style}>{title}</div>
  );
}
