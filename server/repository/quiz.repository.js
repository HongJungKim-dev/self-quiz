const Quiz = require('../models/quiz.js');

module.exports = {
  async createNewQuiz(userId, question, answer, lastSolved, layer, tags) {
    const quiz = await Quiz.create({
      userId, question, answer, lastSolved, layer, tags,
    });

    return quiz;
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

  async passQuiz(userId, quizId, lastSolved) {
    await Quiz.updateOne(
      { userId, _id: quizId },
      {
        $inc: { layer: +1 },
        $set: { lastSolved },
      },
    );
  },

  async failQuiz(userId, quizId, lastSolved) {
    await Quiz.updateOne(
      { userId, _id: quizId },
      {
        $inc: { layer: -1 },
        $set: { lastSolved },
      },
    );
  },

  async keepQuiz(userId, quizId, lastSolved) {
    await Quiz.updateOne(
      { userId, _id: quizId },
      {
        $set: { lastSolved },
      },
    );
  },

  async removeQuiz(userId, quizId) {
    await Quiz.deleteOne({ userId, _id: quizId });
  },
};
