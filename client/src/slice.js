import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'self-quiz',
  initialState: {
    login: {
      id: '',
      pw: '',
    },
    token: localStorage.getItem('token'),
    quizzes: [],
  },
  reducers: {
    setLoginId(state, { payload }) {
      return { ...state, login: { ...state.login, id: payload } };
    },
    setLoginPw(state, { payload }) {
      return { ...state, login: { ...state.login, pw: payload } };
    },
    setToken(state, { payload }) {
      return { ...state, token: payload };
    },
    setQuizzes(state, { payload }) {
      return { ...state, quizzes: payload };
    },
  },
});

export const {
  setLoginId,
  setLoginPw,
  setToken,
  setQuizzes,
} = actions;

export default reducer;
