import axios from 'axios';

import { URL } from '../config';

const requestHeaders = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

export default {
  async addQuiz(question, answer, tags) {
    try {
      const body = { question, answer, tags };
      const { data } = await axios.post(`${URL}/quiz`, body, requestHeaders);
      const { newQuiz } = data;

      return newQuiz;
    } catch (error) {
      return null;
    }
  },
};
