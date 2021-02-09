import React from 'react';

const style = {
  width: '60rem',
  height: '100vh',
  margin: '0 auto',
  '@media (max-width: 768px)': {
    width: '80vw',
  },
};

export default function TodaysQuizLayout({ children }) {
  return (
    <div css={style}>
      {children}
    </div>
  );
}
