const router = require('express').Router();

const {
  decimalToBinary,
  decimalToOctal,
  decimalToHex,
} = require('../controllers/decimal-controller');

router.get('/to-binary/:number', decimalToBinary);
router.get('/octal/:number', decimalToOctal);
router.get('/hex/:number', decimalToHex);

module.exports = router;
