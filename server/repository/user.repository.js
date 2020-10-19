const User = require('../models/user.js');

module.exports = {
  async signUpNewUser(id, pw, name) {
    await User.create({ id, pw, name });
  },
};
