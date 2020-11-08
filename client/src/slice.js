import { createSlice } from '@reduxjs/toolkit';

import { convertTagStringToTags } from './util';

import filterTodaysQuiz from './algorithm';

import api from './apis/api';

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
      tagString: '',
    },
    modal: {
      overlay: false,
      adding: false,
      archive: {},
      editting: false,
      todays: false,
    },
    todays: {
      answerOn: false,
      quizzes: [],
      answerForm: '',
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
      return { ...state, quizzes: payload };
    },
    addQuiz(state, { payload }) {
      return { ...state, quizzes: [...state.quizzes, payload] };
    },
    removeQuiz(state, { payload: _id }) {
      const filteredQuizzes = state.quizzes.filter((quiz) => quiz._id !== _id);
      return { ...state, quizzes: filteredQuizzes };
    },
    editQuiz(state, { payload }) {
      const {
        _id, question, answer, tagString,
      } = payload;
      const tags = convertTagStringToTags(tagString);

      const index = state.quizzes.findIndex((quiz) => quiz._id === _id);
      const copy = [...state.quizzes];

      copy[index] = {
        ...copy[index], question, answer, tags,
      };

      return { ...state, quizzes: copy };
    },
    setQuizForm(state, { payload }) {
      return { ...state, quizForm: { ...state.quizForm, ...payload } };
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
          ...state.quizForm,
          question: '',
          answer: '',
          tagString: '',
        },
      };
    },
    setArchiveQuizModal(state, { payload }) {
      return {
        ...state,
        modal: {
          ...state.modal,
          archive: { ...payload },
        },
      };
    },
    setEdittingModal(state, { payload }) {
      return { ...state, modal: { ...state.modal, editting: payload } };
    },
    closeAllModal(state) {
      return {
        ...state,
        modal: {
          ...state.modal,
          archive: {},
          adding: false,
          overlay: false,
          editting: false,
          todays: false,
        },
        quizForm: {
          ...state.quizForm,
          question: '',
          answer: '',
          tagString: '',
        },
      };
    },
    setTodaysQuizModal(state, { payload }) {
      return { ...state, modal: { ...state.modal, todays: payload } };
    },
    setTodaysAnswerOn(state, { payload }) {
      return { ...state, todays: { ...state.todays, answerOn: payload } };
    },
    setTodaysQuizzes(state, { payload }) {
      return {
        ...state,
        todays: {
          ...state.todays,
          quizzes: [...payload],
        },
      };
    },
    removeTodaysQuiz(state, { payload: quizId }) {
      return {
        ...state,
        todays: {
          ...state.todays,
          quizzes: state.todays.quizzes.filter((quiz) => quiz._id !== quizId),
        },
      };
    },
    setAnswerForm(state, { payload }) {
      return {
        ...state,
        todays: {
          ...state.todays,
          answerForm: payload,
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
  addQuiz,
  removeQuiz,
  editQuiz,
  setQuizForm,
  setOverlay,
  setAddingModal,
  resetQuizForm,
  setArchiveQuizModal,
  setEdittingModal,
  closeAllModal,
  setTodaysQuizModal,
  setTodaysAnswerOn,
  setTodaysQuizzes,
  removeTodaysQuiz,
  setAnswerForm,
} = actions;

export const loadQuizzes = () => async (dispatch) => {
  const quizzes = await api.getQuizzes();

  dispatch(setQuizzes(quizzes));
  dispatch(setTodaysQuizzes(filterTodaysQuiz(quizzes)));
};

export const loadUserName = () => async (dispatch) => {
  const userName = await api.getUserName();
  dispatch(setUserName(userName));
};

export default reducer;
