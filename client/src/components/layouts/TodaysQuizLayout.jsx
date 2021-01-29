import React from 'react';

const style = {
  width: '80vw',
  maxWidth: '80rem',
  height: '100vh',
  margin: '0 auto',
};

export default function TodaysQuizLayout({ children }) {
  return (
    <div css={style}>
      {children}
    </div>
  );
}
