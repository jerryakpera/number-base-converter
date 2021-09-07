const router = require('express').Router();

const { binaryToDecimal } = require('../controllers/binary-controller');

router.get('/to-decimal/:number', binaryToDecimal);

module.exports = router;
