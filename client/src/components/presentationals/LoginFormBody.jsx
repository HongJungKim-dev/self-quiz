import React from 'react';
import { color, mobileSize, size } from '../../static';

const styles = {
  input: {
    display: 'block',
    fontSize: size['#5'],
    width: '96%',
    height: '3rem',
    border: 'none',
    borderBottom: `1px solid ${color.light}`,
    paddingLeft: '1rem',
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#6'],
      height: '6rem',
    },
    '@media (max-width: 480px)': {
      fontSize: mobileSize['#4'],
      height: '10rem',
    },
  },
  button: {
    fontSize: size['#5'],
    fontWeight: 'bold',
    color: color.font,
    width: '100%',
    height: '3rem',
    border: 'none',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      fontSize: mobileSize['#6'],
      height: '6rem',
    },
    '@media (max-width: 480px)': {
      fontSize: mobileSize['#4'],
      height: '10rem',
      marginTop: '2rem',
    },
  },
};

export default function LoginFormBody({
  idInput, pwInput, onIdInputChange, onPwInputChange, onLoginButtonClick,
}) {
  return (
    <div>
      <input
        value={idInput}
        css={styles.input}
        onChange={onIdInputChange}
        placeholder="아이디를 입력해주세요."
      />
      <input
        value={pwInput}
        css={styles.input}
        onChange={onPwInputChange}
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: color.main }}
        onClick={onLoginButtonClick}
      >로그인
      </button>
      <button
        type="button"
        css={{ ...styles.button, backgroundColor: color.light }}
        onClick={onLoginButtonClick}
      >회원가입
      </button>
    </div>
  );
}
