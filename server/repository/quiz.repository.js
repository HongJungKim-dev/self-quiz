const Quiz = require('../models/quiz.js');

const { getCurrentDate } = require('../util.js');

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

  async editQuiz(userId, quizId, question, answer, tags) {
    await Quiz.updateOne(
      { userId, _id: quizId },
      { $set: { question, answer, tags } },
    );
  },

  async passQuiz(userId, quizId) {
    await Quiz.updateOne(
      { userId, _id: quizId },
      {
        $inc: {
          layer: +1,
        },
        $set: {
          lastSolved: getCurrentDate(),
        },
      },
    );
  },
};
