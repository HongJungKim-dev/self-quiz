import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setLoginId, setLoginPw } from '../slice';

import { popupMessages } from '../util';

import api from '../apis/login';

import Input from './Input';
import Button from './Button';

const styles = {
  layout: {
    display: 'table',
    margin: '20rem auto 0 auto',
    padding: '3rem',
    borderRadius: '1rem',
    boxShadow: '0 0 11px 0px #3e7cbc',
  },
  input: {
    display: 'block',
    fontSize: '1rem',
    width: '20rem',
    height: '2rem',
    border: 'none',
    borderBottom: '1px solid #3e7cbc',
  },
  button: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#3e7cbc',
    width: '20rem',
    height: '2rem',
    border: 'none',
    marginTop: '2rem',
  },
};

export default function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, pw } = useSelector(({ selfQuizReducer }) => selfQuizReducer.login);

  const handleLoginIdInput = (event) => {
    dispatch(setLoginId(event.target.value));
  };

  const handleLoginPwInput = (event) => {
    dispatch(setLoginPw(event.target.value));
  };

  const handleLoginButtonClick = async () => {
    const token = await api.login(id, pw);

    if (!token) {
      await popupMessages.fail('아이디 혹은 패스워드가 일치하지 않습니다.');
      return;
    }

    await popupMessages.success('로그인 성공');

    localStorage.setItem('token', token);
    history.push('/quiz');
  };

  return (
    <div css={styles.layout}>
      <Input
        value={id}
        onChange={handleLoginIdInput}
        emotion={styles.input}
      />
      <Input
        value={pw}
        onChange={handleLoginPwInput}
        emotion={styles.input}
      />
      <Button
        title="로그인"
        onClick={handleLoginButtonClick}
        emotion={styles.button}
      />
    </div>
  );
}
