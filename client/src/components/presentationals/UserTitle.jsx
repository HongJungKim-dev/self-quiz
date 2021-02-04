import React from 'react';
import { color, size } from '../../static';

const styles = {
  title: {
    padding: '3rem',
    boxSizing: 'border-box',
    color: color.font,
  },
  name: {
    fontSize: size.title,
    fontWeight: 'bold',
  },
  text: {
    fontSize: size.smallTitle,
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
