import React from 'react';

import { useDispatch } from 'react-redux';

import { setTodaysAnswerOn } from '../slice';

import Button from './Button';

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
  bundle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: '1rem 0 0 0.2rem',
    color: 'white',
    background: '#244a72',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '8rem',
    height: '3rem',
    border: 'none',
    borderRadius: '0.3rem',
    boxShadow: '0 0 4px 3px #a9dfc3',
    cursor: 'pointer',
  },
};

export default function TodaysQuiz() {
  const dispatch = useDispatch();

  const handleShowAnswerButton = () => {
    dispatch(setTodaysAnswerOn(true));
  };

  const handlePassButton = () => {
    // TODO: Implement
    alert('패스');
  };

  const handleFailButton = () => {
    // TODO: Implement
    alert('실패');
  };

  return (
    <>
      <div css={styles.layout}>
        <div>
          <Button
            title="정답 확인하기"
            onClick={handleShowAnswerButton}
            emotion={styles.button}
          />
        </div>
        <div css={styles.bundle}>
          <Button
            title="실패"
            onClick={handleFailButton}
            emotion={{ ...styles.button, background: 'black' }}
          />
          <Button
            title="통과"
            onClick={handlePassButton}
            emotion={{ ...styles.button, background: 'green' }}
          />
        </div>
      </div>
    </>
  );
}
