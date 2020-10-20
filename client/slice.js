import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'self-quiz',
  initialState: {
    login: {
      id: '',
      pw: '',
    },
    quizzes: [],
  },
  reducers: {
    setLoginId(state, { payload }) {
      return { ...state, login: { ...state.login, id: payload } };
    },
    setLoginPw(state, { payload }) {
      return { ...state, login: { ...state.login, pw: payload } };
    },
    setQuizzes(state, { payload }) {
      return { ...state, quizzes: payload };
    },
  },
});

export const {
  setLoginId,
  setLoginPw,
  setQuizzes,
} = actions;

export default reducer;
