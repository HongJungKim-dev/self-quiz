import React from 'react';

import { color, mobileSize, size } from '../../static';

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
    display: 'flex',
    alignItems: 'center',
    backgroundColor: color.main,
    padding: '0 4rem',
    borderRadius: '3px 0 5px 0',
    color: color.font,
    fontWeight: 'bold',
    fontSize: size['#5'],
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#5'],
    },
  },
  flexLayout: {
    display: 'flex',
  },
  data: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    marginLeft: '0.1em',
    backgroundColor: color.main,
    borderRadius: '0 0 5px 5px',
    color: color.font,
    fontSize: size['#5'],
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#5'],
    },
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
