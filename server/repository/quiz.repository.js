const Quiz = require('../models/quiz.js');

module.exports = {
  async createNewQuiz(userId, question, answer, lastSolved, layer, tags) {
    const quiz = await Quiz.create({
      userId, question, answer, lastSolved, layer, tags,
    });

    return quiz._id;
  },

  async getQuizzesById(userId) {
    const quizzes = await Quiz.find({ userId });

    return quizzes;
  },
};
