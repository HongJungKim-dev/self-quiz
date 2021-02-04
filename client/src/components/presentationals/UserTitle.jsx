import React from 'react';
import { color, size } from '../../static';

const styles = {
  title: {
    width: '60rem',
    display: 'table',
    margin: '0 auto',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  name: {
    fontSize: size.title,
    fontWeight: 'bold',
    color: color.font,
    marginTop: '10rem',
  },
  text: {
    fontSize: size.smallTitle,
    color: color.font,
    marginBottom: '10rem',
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
