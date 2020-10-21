import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'self-quiz',
  initialState: {
    user: {
      name: '',
    },
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
    setUserName(state, { payload }) {
      return { ...state, user: { ...state.user, name: payload } };
    },
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
      return { ...state, quizzes: [...state.quizzes, ...payload] };
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
    resetQuizForm(state) {
      return {
        ...state,
        quizForm: {
          ...state.modal,
          question: '',
          answer: '',
          tags: [],
        },
      };
    },
  },
});

export const {
  setUserName,
  setLoginId,
  setLoginPw,
  setToken,
  setQuizzes,
  setQuizFormQuestion,
  setQuizFormAnswer,
  setQuizFormTags,
  setOverlay,
  setAddingModal,
  resetQuizForm,
} = actions;

export default reducer;
