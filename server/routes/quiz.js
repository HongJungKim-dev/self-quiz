const express = require('express');

const router = express.Router();

const loginChecker = require('../middlewares/loginChecker.js');

const quizRepo = require('../repository/quiz.repository.js');

const errorCatcher = require('../middlewares/errorCatcher.js');

router.post('/', loginChecker, errorCatcher(async (req, res) => {
  const { userId, question, answer, lastSolved, layer, tags } = req.body;

  const quizId = await quizRepo.createNewQuiz(userId, question, answer, lastSolved, layer, tags);

  res.status(200).json({ message: 'Complete to add a new quiz', data: { quizId } });
}));

module.exports = router;
