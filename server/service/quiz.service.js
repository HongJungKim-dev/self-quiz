const quizRepo = require('../repository/quiz.repository.js');

const { getCurrentDate, isParamsFull } = require('../util.js');

module.exports = {
  async createNewQuiz(req, res) {
    const { userId, question, answer, tags = [] } = req.body;

    if (isParamsFull(question, answer) === false) {
      res.status(400).json({ message: 'Params not full' });
      return;
    }

    const lastSolved = getCurrentDate();
    const layer = 1;

    const quizId = await quizRepo.createNewQuiz(userId, question, answer, lastSolved, layer, tags);

    res.status(200).json({ message: 'Complete to add a new quiz', data: { quizId } });
  },

  async getQuizzes(req, res) {
    const { userId } = req.body;

    const quizzes = await quizRepo.getQuizzesById(userId);

    res.status(200).json({ message: 'Successfully access to data', data: { quizzes } });
  },

  async editQuiz(req, res) {
    const { userId, quizId, question, answer, tags = [] } = req.body;

    if (isParamsFull(quizId, question, answer) === false) {
      res.status(400).json({ message: 'Params not full' });
      return;
    }

    await quizRepo.editQuiz(userId, quizId, question, answer, tags);

    res.status(200).json({ message: 'Complete to edit quiz' });
  },

  async passQuiz(req, res) {
    const { userId, quizId } = req.body;

    await quizRepo.passQuiz(userId, quizId);

    res.status(200).json({ message: 'Complete to make quiz pass' });
  },

  async removeQuiz(req, res) {
    const { userId } = req.body;
    const { quizId } = req.params;

    await quizRepo.removeQuiz(userId, quizId);

    res.status(200).json({ message: 'Complete to remove quiz' });
  },
};
