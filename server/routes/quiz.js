const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

const quizRepo = require('../repository/quiz.repository.js');

const errorCatcher = require('../middlewares/errorCatcher.js');

router.post('/', errorCatcher(async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.replace(/Bearer /g, "");

  const data = jwt.verify(token, process.env.JWT_SECRET);

  const { userId, question, answer, lastSolved, layer, tags } = req.body;

  if (data.userId !== userId) {
    res.status(403).json({ message: 'Invalid request' });
    return;
  }

  const quizId = await quizRepo.createNewQuiz(userId, question, answer, lastSolved, layer, tags);

  res.status(200).json({ message: 'Complete to add a new quiz', data: { quizId } });
}));

module.exports = router;
