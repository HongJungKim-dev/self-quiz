const express = require('express');

const router = express.Router();

const loginChecker = require('../middlewares/loginChecker.js');

const errorCatcher = require('../middlewares/errorCatcher.js');

const quizService = require('../service/quiz.service.js');

router.use(loginChecker);

router.post('/', errorCatcher(quizService.createNewQuiz));
router.get('/', errorCatcher(quizService.getQuizzes));
router.patch('/edit', errorCatcher(quizService.editQuiz));
router.patch('/pass', errorCatcher(quizService.passQuiz));
router.patch('/fail', errorCatcher(quizService.failQuiz));
router.patch('/keep', errorCatcher(quizService.keepQuiz));
router.delete('/:quizId', errorCatcher(quizService.removeQuiz));

module.exports = router;
