import React from 'react';

import { useHistory } from 'react-router-dom';

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'center',
  },
  selection: {
    border: '1px solid',
    width: '20rem',
    height: '20rem',
    '&:hover': {
      background: '#3e7cbc54',
      cursor: 'pointer',
    },
  },
};

export default function MainPage() {
  const history = useHistory();

  return (
    <div css={styles.layout}>
      <button onClick={() => history.push('/adding')} css={styles.selection} type="button">
        문제 추가
      </button>
      <button onClick={() => history.push('/')} css={styles.selection} type="button">
        오늘의 문제
      </button>
      <button onClick={() => history.push('/archive')} css={styles.selection} type="button">
        아카이브
      </button>
    </div>
  );
}
