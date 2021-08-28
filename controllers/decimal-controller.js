const decimalConverter = require('../libs/conversion/decimal');
const validateDecimal = require('../libs/validation/validate-decimal');

module.exports = {
  async decimalToBinary(req, res, next) {
    try {
      let { number } = req.params;

      // Validate decimal
      if (!validateDecimal(number)) {
        return res.status(400).send('Enter a valid decimal number');
      }

      const conversion = decimalConverter.toBinary(number);
      return res.send({ conversion });
    } catch (err) {
      console.log(err);

      return res.send(err);
    }
  },

  async decimalToOctal(req, res, next) {
    try {
      let { number } = req.params;

      // Validate decimal
      if (!validateDecimal(number)) {
        return res.status(400).send('Enter a valid decimal number');
      }

      const conversion = decimalConverter.toOctal(number);
      return res.send({ conversion });
    } catch (err) {
      console.log(err);

      return res.send(err);
    }
  },

  async decimalToHex(req, res, next) {
    try {
      let { number } = req.params;

      // Validate decimal
      if (!validateDecimal(number)) {
        return res.status(400).send('Enter a valid decimal number');
      }

      const conversion = decimalConverter.toHex(number);
      return res.send({ conversion });
    } catch (err) {
      console.log(err);

      return res.send(err);
    }
  },
};
