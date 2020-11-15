import React from 'react';

const style = {
  fontWeight: 'bold',
  fontSize: '1.3rem',
  marginTop: '1rem',
};

export default function AddingFormSubtitle({ title }) {
  return (
    <div css={style}>{title}</div>
  );
}
