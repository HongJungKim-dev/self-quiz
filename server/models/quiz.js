const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  lastSolved: { type: String, required: true },
  layer: { type: Number, required: true },
  tags: { type: Array, required: true },
});

module.exports = mongoose.model('Quiz', quizSchema);
