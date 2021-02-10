import React from 'react';
import { color, size, mobileSize } from '../../static';

const styles = {
  title: {
    padding: '3rem',
    boxSizing: 'border-box',
    color: color.font,
    '@media (max-width: 768px)': {
      marginBottom: '5rem',
    },
  },
  name: {
    fontSize: size['#1'],
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#1'],
    },
  },
  text: {
    fontSize: size['#3'],
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#4'],
    },
  },
};

export default function UserTitle({ user, todays }) {
  return (
    <div css={styles.title}>
      <div css={styles.name}>{user.name}님,</div>
      <div css={styles.text}>오늘 복습해야 할 문제는 총 {todays.quizzes.length}문제 입니다.</div>
    </div>
  );
}
