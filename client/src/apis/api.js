import axios from 'axios';

import { URL } from '../config';

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default {
  async login(userId, userPw) {
    try {
      const { data } = await axios.post(`${URL}/auth/login`, { userId, userPw });
      const { token } = data;

      return token;
    } catch (error) {
      return null;
    }
  },

  async getUserName() {
    try {
      const { data } = await axios.get(`${URL}/auth`, getHeaders());
      const { user: userName } = data;

      return userName;
    } catch (error) {
      return null;
    }
  },

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

  async editQuiz(quizId, question, answer, tags) {
    try {
      const body = {
        quizId, question, answer, tags,
      };
      await axios.patch(`${URL}/quiz/edit`, body, getHeaders());

      return true;
    } catch (error) {
      return false;
    }
  },

  async deleteQuiz(_id) {
    try {
      await axios.delete(`${URL}/quiz/${_id}`, getHeaders());

      return true;
    } catch (error) {
      return false;
    }
  },
};
