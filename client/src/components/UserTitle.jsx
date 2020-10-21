import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setUserName } from '../slice';

import api from '../apis/api';

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

const getUserNameFromServer = async (dispatch) => {
  const userName = await api.getUserName();
  dispatch(setUserName(userName));
};

export default function UserTitle() {
  const dispatch = useDispatch();
  const states = useSelector(({ selfQuizReducer }) => selfQuizReducer);
  const { user } = states;
  const { name } = user;

  useEffect(() => {
    if (!name) {
      getUserNameFromServer(dispatch);
    }
  }, []);

  return (
    <div css={styles.title}>
      <div css={styles.name}>{name}님,</div>
      <div css={styles.text}>오늘 복습해야 할 문제는 총 {12}문제 입니다.</div>
    </div>
  );
}
