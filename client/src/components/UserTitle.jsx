import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadUserName } from '../slice';

const styles = {
  title: {
    width: '60rem',
    display: 'table',
    margin: '0 auto',
  },
  name: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '10rem',
  },
  text: {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '10rem',
  },
};

export default function UserTitle() {
  const dispatch = useDispatch();
  const states = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { user } = states;
  const { name } = user;

  useEffect(() => {
    if (!name) {
      dispatch(loadUserName());
    }
  }, []);

  return (
    <div css={styles.title}>
      <div css={styles.name}>{name}님,</div>
      <div css={styles.text}>오늘 복습해야 할 문제는 총 {12}문제 입니다.</div>
    </div>
  );
}
