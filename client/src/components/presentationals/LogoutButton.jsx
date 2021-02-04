import React from 'react';

import { color } from '../../static';

import LogoutIcon from '../icons/LogoutIcon';

const styles = {
  button: {
    width: '2.5rem',
    position: 'absolute',
    right: '0',
    color: '#ffffff',
    cursor: 'pointer',
    margin: '2rem',
    '&:hover': {
      color: color.faintWhite,
    },
    '@media (max-width: 768px)': {
      width: '5rem',
    },
  },
};

export default function LogoutButton({ onClick }) {
  return (
    <div title="로그아웃" css={styles.button}>
      <LogoutIcon
        onClick={onClick}
      />
    </div>
  );
}
