const User = require('../models/user.js');

module.exports = {
  async signUpNewUser(id, pw, name) {
    await User.create({ id, pw, name });
  },

  async checkIsValidUser(id, pw) {
    const user = await User.findOne({ id });

    return user.pw === pw;
  },
};
