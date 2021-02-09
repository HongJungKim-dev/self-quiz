import React from 'react';

import { color } from '../../static';

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: '1px',
    backgroundColor: 'white',
    padding: '0.5rem',
    borderRadius: '0 0 5px 5px',
    height: '15%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '0 3rem',
    marginLeft: '5px',
    border: 'none',
    color: color.font,
    borderRadius: '3px',
    cursor: 'pointer',
    fontWeight: 'bold',
    '&:hover': {
      opacity: '0.7',
    },
    '@media (max-width: 768px)': {
      fontSize: '3rem',
      padding: '0 5rem',
    },
  },
};

export default function TodaysQuizAnswerButtons({ onFailClick, onKeepClick, onPassClick }) {
  return (
    <div css={styles.layout}>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: color.red }}
        onClick={onFailClick}
      >FAIL
      </button>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: color.green }}
        onClick={onKeepClick}
      >KEEP
      </button>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: color.main }}
        onClick={onPassClick}
      >PASS
      </button>
    </div>
  );
}
