const express = require('express');
const helmet = require('helmet');
const responseTime = require('response-time');

const _config = require('./config');

const app = express();

app.use(helmet());
app.use(responseTime());

app.use(_config.baseURL, require('./routes'));

app.use('*', (req, res, next) => {
  return res.status(404).send('Not found!');
});

app.listen(_config.port || 3000, () => {
  console.log(`KNT Server is on port ${_config.port}`);
});
