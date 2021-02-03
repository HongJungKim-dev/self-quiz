import React from 'react';

import { colors } from '../../static';

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
    '&:hover': {
      opacity: '0.7',
    }
  },
};

export default function TodaysQuizAnswerButtons({ onFailClick, onKeepClick, onPassClick }) {
  return (
    <div css={styles.layout}>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: colors.red }}
        onClick={onFailClick}
      >FAIL
      </button>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: colors.green }}
        onClick={onKeepClick}
      >KEEP
      </button>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: colors.main }}
        onClick={onPassClick}
      >PASS
      </button>
    </div>
  );
}
