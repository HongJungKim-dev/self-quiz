import { createSlice } from '@reduxjs/toolkit';

import { convertTagStringToTags } from './util';

import { filterTodaysQuiz, sortByCurrent } from './algorithm';

import api from './apis/api';

export const { reducer, actions } = createSlice({
  name: 'self-quiz',
  initialState: {
    user: {
      name: '',
      token: localStorage.getItem('token'),
    },
    form: {
    login: {
      id: '',
      pw: '',
    },
    },
    },
    quizForm: {
      _id: '',
      question: '',
      answer: '',
      tagString: '',
    },
    modalShowing: {
      overlay: false,
      adding: false,
      archive: false,
      editting: false,
    },
    todays: {
      answerOn: false,
      quizzes: [],
    },
  },
  reducers: {
    setUserName(state, { payload }) {
      return { ...state, user: { ...state.user, name: payload } };
    },
    setLoginForm(state, { payload }) {
      const { type, value } = payload;

      return {
        ...state,
        form: {
          ...state.form,
          login: {
            ...state.form.login,
            [type]: value,
    },
        },
      };
    },
    setToken(state, { payload }) {
      return { ...state, user: { ...state.user, token: payload } };
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
    setModalState(state, { payload }) {
      const { type, showing } = payload;

      return {
        ...state,
        modalShowing: {
          ...state.modalShowing,
          [type]: showing,
          overlay: showing,
    },
      };
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
    closeAllModal(state) {
      return {
        ...state,
        modalShowing: {
          ...state.modalShowing,
          archive: false,
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
  },
});

export const {
  setUserName,
  setLoginForm,
  setToken,
  setQuizzes,
  addQuiz,
  removeQuiz,
  editQuiz,
  setQuizForm,
  resetQuizForm,
  closeAllModal,
  setTodaysAnswerOn,
  setTodaysQuizzes,
  removeTodaysQuiz,
  setModalState,
} = actions;

export const loadQuizzes = () => async (dispatch) => {
  const quizzes = await api.getQuizzes();

  dispatch(setQuizzes(quizzes));

  const filteredQuizzes = filterTodaysQuiz(quizzes);
  const result = sortByCurrent(filteredQuizzes);

  dispatch(setTodaysQuizzes(result));
};

export const loadUserName = () => async (dispatch) => {
  const userName = await api.getUserName();
  dispatch(setUserName(userName));
};

export default reducer;
