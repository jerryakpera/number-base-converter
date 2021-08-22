const router = require('express').Router();

router.get('/test', (req, res) => {
  return res.send('Up and running!');
});

router.use('/decimal', require('./decimal'));

module.exports = router;