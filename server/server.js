const express = require('express');
const helmet = require('helmet');
const responseTime = require('response-time');

const _config = require('./config');

const app = express();

app.use(helmet());
app.use(responseTime());

// Add static files
app.use(express.static('./public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.render('index', {
    title: 'NBC - Number Base Converter',
    text: 'NBC - Number Base Converter',
  });
});

app.use(_config.apiURL, require('./routes'));

app.use('*', (req, res, next) => {
  return res.status(404).send('Not found!');
});

app.listen(_config.port || 3000, () => {
  console.log(`KNT Server is on port ${_config.port}`);
});
