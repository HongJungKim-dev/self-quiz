import React from 'react';

import { color, size } from '../../static';

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
    color: color.font,
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: size.smallText,
    fontWeight: 'bold',
    '&:hover': {
      opacity: '0.7',
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
