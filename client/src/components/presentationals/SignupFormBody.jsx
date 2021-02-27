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
    marginTop: '1px',
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
    backgroundColor: color.main,
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

export default function SignupFormBody({
  nameInput, idInput, pw1Input, pw2Input,
  onNameInputChange, onIdInputChange, onPw1InputChange, onPw2InputChange, onSignupButtonClick,
}) {
  return (
    <div>
      <input
        value={nameInput}
        css={styles.input}
        onChange={onNameInputChange}
        placeholder="이름을 입력해주세요."
      />
      <input
        value={idInput}
        css={styles.input}
        onChange={onIdInputChange}
        placeholder="아이디를 입력해주세요."
      />
      <input
        value={pw1Input}
        css={styles.input}
        onChange={onPw1InputChange}
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <input
        value={pw2Input}
        css={styles.input}
        onChange={onPw2InputChange}
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
      />
      <button
        type="button"
        css={styles.button}
        onClick={onSignupButtonClick}
      >회원가입
      </button>
    </div>
  );
}
