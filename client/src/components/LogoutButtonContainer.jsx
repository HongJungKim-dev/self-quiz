import React from 'react';

import { useDispatch } from 'react-redux';

import { setToken } from '../slice';

import { popupMessages } from '../util';

import Button from './Button';

const styles = {
  button: {
    position: 'absolute',
    right: 0,
    width: '7rem',
    height: '3rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(90deg,#263443, #34679d)',
    border: 'none',
    borderRadius: '0.6rem',
    cursor: 'pointer',
    margin: '2rem',
    boxShadow: '0 0 8px 0px #ffffff',
    '@media (max-width: 680px)': {
      fontSize: '3vw',
      width: '20vw',
      height: '10vw',
    },
  },
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleLogoutButtonClick = async () => {
    localStorage.removeItem('token');
    dispatch(setToken(null));

    await popupMessages.success('로그아웃 되었습니다.');
  };

  return (
    <Button
      title="로그아웃"
      onClick={handleLogoutButtonClick}
      emotion={styles.button}
    />
  );
}
