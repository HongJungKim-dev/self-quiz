import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLoginId, setLoginPw } from '../slice';

import Input from './Input';

const styles = {
  layout: {
    marginBottom: '1rem',
  },
  input: {
    display: 'block',
    fontSize: '1rem',
    width: '96%',
    height: '3rem',
    border: 'none',
    borderBottom: '1px solid #3e7cbc',
    paddingLeft: '1rem',
  },
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const { id, pw } = useSelector(({ selfQuizReducer }) => selfQuizReducer.login);

  const handleLoginIdInput = (event) => {
    dispatch(setLoginId(event.target.value));
  };

  const handleLoginPwInput = (event) => {
    dispatch(setLoginPw(event.target.value));
  };

  return (
    <div css={styles.layout}>
      <Input
        value={id}
        onChange={handleLoginIdInput}
        emotion={styles.input}
        placeholder="아이디를 입력해주세요."
      />
      <Input
        value={pw}
        onChange={handleLoginPwInput}
        emotion={styles.input}
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
    </div>
  );
}
