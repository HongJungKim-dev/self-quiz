import React from 'react';

import { color, size } from '../../static';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: '5px 5px 0 0',
    paddingBottom: '1rem',
  },
  text: {
    backgroundColor: color.main,
    padding: '5px 50px',
    borderRadius: '3px 0 5px 0',
    color: color.font,
    fontWeight: 'bold',
    fontSize: size.smallText,
  },
  dataLayout: {
    display: 'flax',
  },
  data: {
    marginLeft: '0.1em',
    backgroundColor: color.main,
    padding: '5px 20px',
    borderRadius: '0 0 5px 5px',
    color: color.font,
    fontSize: size.smallText,
  },
};

export default function TodaysQuizAnswerHeader({ quiz }) {
  const tagElement = quiz.tags.length === 0
    ? <span>#No Tags</span>
    : quiz.tags.map((tag) => <span key={tag}>#{tag} </span>);

  return (
    <div css={styles.header}>
      <div>
        <div css={styles.text}>정답</div>
      </div>
      <div css={styles.dataLayout}>
        <div css={styles.data}>{tagElement}</div>
        <div css={styles.data}>{quiz.layer}레벨</div>
      </div>
    </div>
  );
}
