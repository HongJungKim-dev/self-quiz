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
    quizForm: {
      question: '',
      answer: '',
      tags: [],
    },
    modal: {
      overlay: false,
      adding: false,
    },
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
    setQuizFormQuestion(state, { payload }) {
      return { ...state, quizForm: { ...state.quizForm, question: payload } };
    },
    setQuizFormAnswer(state, { payload }) {
      return { ...state, quizForm: { ...state.quizForm, answer: payload } };
    },
    setQuizFormTags(state, { payload }) {
      return { ...state, quizForm: { ...state.quizForm, tags: payload } };
    },
    setOverlay(state, { payload }) {
      return { ...state, modal: { ...state.modal, overlay: payload } };
    },
    setAddingModal(state, { payload }) {
      return { ...state, modal: { ...state.modal, adding: payload } };
    },
  },
});

export const {
  setLoginId,
  setLoginPw,
  setToken,
  setQuizzes,
  setQuizFormQuestion,
  setQuizFormAnswer,
  setQuizFormTags,
  setOverlay,
  setAddingModal,
} = actions;

export default reducer;
