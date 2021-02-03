import React from 'react';

import { size } from '../../static';

const style = {
  fontWeight: 'bold',
  fontSize: size.text,
  marginTop: '1rem',
};

export default function AddingFormSubtitle({ title }) {
  return (
    <div css={style}>{title}</div>
  );
}
