import axios from 'axios';

import { URL } from '../config';

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default {
  async addQuiz(question, answer, tags) {
    try {
      const body = { question, answer, tags };
      const { data } = await axios.post(`${URL}/quiz`, body, getHeaders());
      const { newQuiz } = data;

      return newQuiz;
    } catch (error) {
      return null;
    }
  },

  async getQuizzes() {
    try {
      const { data } = await axios.get(`${URL}/quiz`, getHeaders());
      const { quizzes } = data;

      return quizzes;
    } catch (error) {
      return [];
    }
  },
};
