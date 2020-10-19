import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'self-quiz',
  initialState: {
    quizzes: [],
  },
  reducers: {
    setQuizzes(state, { payload }) {
      return { ...state, quizzes: payload };
    },
  },
});

export const {
  setQuizzes,
} = actions;

export default reducer;
