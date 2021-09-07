const router = require('express').Router();

router.get('/test', (req, res) => {
  return res.send('Up and running!');
});

router.use('/convert/decimal', require('./decimal'));
router.use('/convert/binary', require('./binary'));

module.exports = router;
