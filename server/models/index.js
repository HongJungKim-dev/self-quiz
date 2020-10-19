const mongoose = require('mongoose');

require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URL, options)
  .then(() => console.log('MongoDB is connected'))
  .catch(e => console.error(e));
