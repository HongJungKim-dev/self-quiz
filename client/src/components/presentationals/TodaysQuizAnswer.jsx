import React from 'react';

const styles = {
  layout: {
    width: '100%',
    height: '35vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: '5px 5px 0 0',
    paddingBottom: '1rem',
  },
  answerText: {
    backgroundColor: '#2a5582',
    padding: '5px 50px',
    borderRadius: '3px 0 5px 0',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  dataLayout: {
    display: 'flax',
  },
  data: {
    marginLeft: '0.1em',
    backgroundColor: '#2a5582',
    padding: '5px 20px',
    borderRadius: '0 0 5px 5px',
    color: 'white',
    fontSize: '1rem',
  },
  answer: {
    display: 'block',
    width: '100%',
    height: '100%',
    background: 'white',
    fontSize: '1.2rem',
    resize: 'none',
    padding: '20px 35px',
    boxSizing: 'border-box',
    border: 'none',
  },
  buttonLayout: {
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

export default function TodaysQuizAnswer({
  quiz, onPassClick, onKeepClick, onFailClick,
}) {
  return (
    <div css={styles.layout}>
      <div css={styles.header}>
        <div>
          <div css={styles.answerText}>정답</div>
        </div>
        <div css={styles.dataLayout}>
          <div css={styles.data}>{quiz.tags.map((tag) => <span>#{tag} </span>)}</div>
          <div css={styles.data}>{quiz.layer}레벨</div>
        </div>
      </div>
      <textarea
        value={quiz.answer}
        css={styles.answer}
        disabled="disabled"
      />
      <div css={styles.buttonLayout}>
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
    </div>
  );
}
