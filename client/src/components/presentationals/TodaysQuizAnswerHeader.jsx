import React from 'react';

import { color, size } from '../../static';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '1px',
    backgroundColor: 'white',
    borderRadius: '5px 5px 0 0',
    height: '10%',
  },
  text: {
    backgroundColor: color.main,
    padding: '5px 50px',
    borderRadius: '3px 0 5px 0',
    color: color.font,
    fontWeight: 'bold',
    fontSize: size.smallText,
  },
  flexLayout: {
    display: 'flex',
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
      <div css={styles.flexLayout}>
        <div css={styles.text}>정답</div>
      </div>
      <div css={styles.flexLayout}>
        <div css={styles.data}>{tagElement}</div>
        <div css={styles.data}>{quiz.layer}레벨</div>
      </div>
    </div>
  );
}
