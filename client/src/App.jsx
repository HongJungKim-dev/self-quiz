import React from 'react';

import LoginForm from './components/LoginForm';

const styles = {
  emotion: {
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'blue',
  },
};

export default function App() {
  return (
    <>
      <div css={styles.emotion}>Quick Start React</div>
      <LoginForm />
    </>
  );
}
