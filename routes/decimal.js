const router = require('express').Router();

const {
  decimalToBinary,
  decimalToOctal,
  decimalToHex,
} = require('../controllers/decimal-controller');

router.get('/to-binary/:number', decimalToBinary);
router.get('/to-octal/:number', decimalToOctal);
router.get('/to-hex/:number', decimalToHex);

module.exports = router;
