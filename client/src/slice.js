import { createSlice } from '@reduxjs/toolkit';

import { convertTagStringToTags } from './util';

import { filterTodaysQuiz, sortByCurrent } from './algorithm';

import api from './apis/api';

const { reducer, actions } = createSlice({
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
      quiz: {
        _id: '',
        question: '',
        answer: '',
        tagString: '',
      },
    },
    quizzes: [],
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
    setUserName(state, { payload: name }) {
      return {
        ...state,
        user: {
          ...state.user,
          name,
        },
      };
    },
    setToken(state, { payload: token }) {
      return {
        ...state,
        user: {
          ...state.user,
          token,
        },
      };
    },
    setLoginForm(state, { payload: { type, value } }) {
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
    setQuizForm(state, { payload: quizFormData }) {
      return {
        ...state,
        form: {
          ...state.form,
          quiz: {
            ...state.form.quiz,
            ...quizFormData,
          },
        },
      };
    },
    resetQuizForm(state) {
      return {
        ...state,
        form: {
          ...state.form,
          quiz: {
            ...state.form.quiz,
            _id: '',
            question: '',
            answer: '',
            tagString: '',
          },
        },
      };
    },
    setQuizzes(state, { payload: quizzes }) {
      return {
        ...state,
        quizzes,
      };
    },
    addQuiz(state, { payload: quiz }) {
      return {
        ...state,
        quizzes: [
          ...state.quizzes,
          quiz,
        ],
      };
    },
    removeQuiz(state, { payload: quizId }) {
      return {
        ...state,
        quizzes: state.quizzes.filter((quiz) => quiz._id !== quizId),
      };
    },
    editQuiz(state, { payload: quizData }) {
      const { _id, tagString, ...updatedData } = quizData;
      const tags = convertTagStringToTags(tagString);

      return {
        ...state,
        quizzes: state.quizzes.map(
          (quiz) => (quiz._id !== _id ? quiz : { ...quiz, ...updatedData, tags }),
        ),
      };
    },
    setModalState(state, { payload: { type, showing } }) {
      return {
        ...state,
        modalShowing: {
          ...state.modalShowing,
          [type]: showing,
          overlay: showing,
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
      };
    },
    setTodaysQuizzes(state, { payload: todaysQuizzes }) {
      return {
        ...state,
        todays: {
          ...state.todays,
          quizzes: [...todaysQuizzes],
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
    setTodaysAnswerOn(state, { payload: answerOn }) {
      return {
        ...state,
        todays: {
          ...state.todays,
          answerOn,
        },
      };
    },
  },
});

export const {
  setUserName,
  setToken,
  setLoginForm,
  setQuizForm,
  resetQuizForm,
  setQuizzes,
  addQuiz,
  removeQuiz,
  editQuiz,
  setModalState,
  closeAllModal,
  setTodaysQuizzes,
  removeTodaysQuiz,
  setTodaysAnswerOn,
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
