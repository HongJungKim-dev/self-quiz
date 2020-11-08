import axios from 'axios';

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default {
  async login(userId, userPw) {
    try {
      const { data } = await axios.post(`${process.env.URL}/auth/login`, { userId, userPw });
      const { token } = data;

      return token;
    } catch (error) {
      return null;
    }
  },

  async getUserName() {
    try {
      const { data } = await axios.get(`${process.env.URL}/auth`, getHeaders());
      const { user: userName } = data;

      return userName;
    } catch (error) {
      return null;
    }
  },

  async addQuiz(question, answer, tags) {
    try {
      const body = { question, answer, tags };
      const { data } = await axios.post(`${process.env.URL}/quiz`, body, getHeaders());
      const { newQuiz } = data;

      return newQuiz;
    } catch (error) {
      return null;
    }
  },

  async getQuizzes() {
    try {
      const { data } = await axios.get(`${process.env.URL}/quiz`, getHeaders());
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
      await axios.patch(`${process.env.URL}/quiz/edit`, body, getHeaders());

      return true;
    } catch (error) {
      return false;
    }
  },

  async deleteQuiz(quizId) {
    try {
      await axios.delete(`${process.env.URL}/quiz/${quizId}`, getHeaders());

      return true;
    } catch (error) {
      return false;
    }
  },

  async passQuiz(quizId) {
    try {
      await axios.patch(`${process.env.URL}/quiz/pass`, { quizId }, getHeaders());

      return true;
    } catch (error) {
      return false;
    }
  },

  async failQuiz(quizId) {
    try {
      await axios.patch(`${process.env.URL}/quiz/fail`, { quizId }, getHeaders());

      return true;
    } catch (error) {
      return false;
    }
  },
};
