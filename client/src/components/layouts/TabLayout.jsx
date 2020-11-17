import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  boxSizing: 'border-box',
};

export default function TabLayout({ children }) {
  return (
    <div css={style}>
      {children}
    </div>
  );
}
