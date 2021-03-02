import React from 'react';

import { color, mobileSize } from '../../static';

import Loading from './Loading';

const styles = {
  layout: {
    width: '100%',
    position: 'fixed',
    height: '100%',
    backdropFilter: 'blur(3px)',
    backgroundColor: '#00000070',
    zIndex: 1,
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  text: {
    color: color.faintWhite,
    marginLeft: '5px',
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#5'],
      padding: '1rem',
      borderRadius: '1.4rem 1.4rem 0 0',
    },
  },
};

export default function LoadingOverlay() {
  return (
    <div css={styles.layout}>
      <div css={styles.loading}>
        <Loading size={30} />
        <div css={styles.text}>데이터를 불러오는 중입니다.</div>
      </div>
    </div>
  );
}
