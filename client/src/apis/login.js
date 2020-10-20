import axios from 'axios';

import { URL } from '../config';

export default {
  async login(userId, userPw) {
    const { data } = await axios.post(`${URL}/auth/login`, { userId, userPw });
    const { token } = data;

    return token;
  },
};
