const express = require('express');
const helmet = require('helmet');
const responseTime = require('response-time');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('express-flash');

const _config = require('./config');

const app = express();

app.use(helmet());
app.use(responseTime());

app.use(flash());
app.use(
  session({
    secret: _config.sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
);

// Add static files
app.use(express.static('./public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set views
app.set('views', './views');
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Content-Security-Policy': 'default-src *',
    'X-Content-Security-Policy': 'default-src *',
    'X-WebKit-CSP': 'default-src *',
  });
  next();
});

app.get('/', (req, res) => {
  // req.flash('logged', 'You are logged out');
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
  console.log(`NBC Server is on port ${_config.port}`);
});
