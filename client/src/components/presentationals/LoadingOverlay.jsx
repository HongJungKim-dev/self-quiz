import React from 'react';
import { color } from '../../static';
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
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  text: {
    color: color.faintWhite,
    marginLeft: '5px',
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
