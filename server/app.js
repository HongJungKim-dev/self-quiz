const express = require('express');

const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

// TODO: 아래 라우트 제거
app.get('/', (req, res) => {
  res.send('hello woomin');
});

app.use('/', require('./routes'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Error handler catches server error');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
