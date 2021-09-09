const router = require('express').Router();

const {
  binaryToDecimal,
  binaryToOctal,
} = require('../controllers/binary-controller');

router.get('/to-decimal/:number', binaryToDecimal);
router.get('/to-octal/:number', binaryToOctal);

module.exports = router;
