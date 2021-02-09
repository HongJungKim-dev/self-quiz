import React from 'react';

const style = {
  width: '60rem',
  margin: '0 auto',
  '@media (max-width: 768px)': {
    width: '90vw',
  },
};

export default function ArchiveLayout({ children }) {
  return (
    <div css={style}>
      {children}
    </div>
  );
}
