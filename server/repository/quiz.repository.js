const Quiz = require('../models/quiz.js');

module.exports = {
  async createNewQuiz(userId, question, answer, lastSolved, layer, tags) {
    await Quiz.create({
      userId, question, answer, lastSolved, layer, tags,
    });
  },
};
