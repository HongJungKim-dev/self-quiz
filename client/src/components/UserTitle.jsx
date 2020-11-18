import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadUserName } from '../slice';

const styles = {
  title: {
    width: '60rem',
    display: 'table',
    margin: '0 auto',
    padding: '2rem',
    boxSizing: 'border-box',
    '@media (max-width: 960px)': {
      width: '100vw',
    },
  },
  name: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '10rem',
    '@media (max-width: 680px)': {
      fontSize: '7vw',
    },
  },
  text: {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '10rem',
    '@media (max-width: 960px)': {
      marginBottom: '20vw',
    },
    '@media (max-width: 680px)': {
      fontSize: '4vw',
    },
  },
};

export default function UserTitle() {
  const dispatch = useDispatch();
  const { user, todays } = useSelector((state) => state);
  const { name } = user;

  useEffect(() => {
    if (!name) {
      dispatch(loadUserName());
    }
  }, []);

  return (
    <div css={styles.title}>
      <div css={styles.name}>{name}님,</div>
      <div css={styles.text}>오늘 복습해야 할 문제는 총 {todays.quizzes.length}문제 입니다.</div>
    </div>
  );
}
