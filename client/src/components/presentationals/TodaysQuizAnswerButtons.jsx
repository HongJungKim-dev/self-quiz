import React from 'react';

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    padding: '0.5rem',
    borderRadius: '0 0 5px 5px',
  },
  button: {
    padding: '10px 30px',
    marginLeft: '5px',
    border: 'none',
    color: 'white',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};

export default function TodaysQuizAnswerButtons({ onFailClick, onKeepClick, onPassClick }) {
  return (
    <div css={styles.layout}>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: '#bf0a0a' }}
        onClick={onFailClick}
      >FAIL
      </button>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: '#3a7970' }}
        onClick={onKeepClick}
      >KEEP
      </button>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: '#2a5582' }}
        onClick={onPassClick}
      >PASS
      </button>
    </div>
  );
}
