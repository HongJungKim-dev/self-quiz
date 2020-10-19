const express = require('express');

const router = express.Router();

const loginChecker = require('../middlewares/loginChecker.js');

const quizRepo = require('../repository/quiz.repository.js');

const errorCatcher = require('../middlewares/errorCatcher.js');

const { getCurrentDate, isParamsFull } = require('../util.js');

router.post('/', loginChecker, errorCatcher(async (req, res) => {
  const { userId, question, answer, tags = [] } = req.body;

  if (isParamsFull(question, answer) === false) {
    res.status(400).json({ message: 'Params not full' });
    return;
  }

  const lastSolved = getCurrentDate();
  const layer = 1;

  const quizId = await quizRepo.createNewQuiz(userId, question, answer, lastSolved, layer, tags);

  res.status(200).json({ message: 'Complete to add a new quiz', data: { quizId } });
}));

router.get('/', loginChecker, errorCatcher(async (req, res) => {
  const { userId } = req.body;

  const quizzes = await quizRepo.getQuizzesById(userId);

  res.status(200).json({ message: 'Successfully access to data', data: { quizzes } });
}));

router.patch('/edit', loginChecker, errorCatcher(async (req, res) => {
  const { userId, quizId, question, answer, tags = [] } = req.body;

  if (isParamsFull(quizId, question, answer) === false) {
    res.status(400).json({ message: 'Params not full' });
    return;
  }

  await quizRepo.editQuiz(userId, quizId, question, answer, tags);

  res.status(200).json({ message: 'Complete to edit quiz' });
}));

router.patch('/pass', loginChecker, errorCatcher(async (req, res) => {
  const { userId, quizId } = req.body;

  await quizRepo.passQuiz(userId, quizId);

  res.status(200).json({ message: 'Complete to make quiz pass' });
}));

module.exports = router;
