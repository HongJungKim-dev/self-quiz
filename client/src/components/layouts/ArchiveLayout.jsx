import React from 'react';

const style = {
  background: 'linear-gradient(90deg, #111d2a, #295582 )',
  width: '100%',
};

export default function ArchiveLayout({ children }) {
  return (
    <div css={style}>
      {children}
    </div>
  );
}
