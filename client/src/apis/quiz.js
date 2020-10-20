import axios from 'axios';

import { URL } from '../config';

export default {
  // TODO: 리팩터링해야함. 헤더 중복될것임
  async addQuiz(question, answer, tags) {
    try {
      const { data } = await axios.post(`${URL}/quiz`,
        { question, answer, tags },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

      const { newQuiz } = data;

      return newQuiz;
    } catch (error) {
      return null;
    }
  },
};
