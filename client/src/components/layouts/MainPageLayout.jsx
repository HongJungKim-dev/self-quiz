import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '60rem',
  height: '100vh',
  margin: '0 auto',
  justifyContent: 'center',
};

export default function MainPageLayout({ children }) {
  return (
    <div css={style}>{children}</div>
  );
}
