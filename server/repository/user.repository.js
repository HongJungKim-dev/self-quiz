const User = require('../models/user.js');

module.exports = {
  async signUpNewUser(id, pw, name) {
    try {
      await User.create({ id, pw, name });
      return true;
    } catch (error) {
      console.error(error);
    }
  },
};
