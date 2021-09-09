const binaryConverter = require('../libs/conversion/binary');
const validateBinary = require('../libs/validation/validate-binary');

module.exports = {
  async binaryToDecimal(req, res, next) {
    try {
      let { number } = req.params;

      // Validate binary
      if (!validateBinary(number)) {
        return res.status(400).send('Enter a valid binary number');
      }

      const conversion = binaryConverter.toDecimal(number);
      return res.send({ conversion });
    } catch (err) {
      console.log(err);

      return res.send(err);
    }
  },

  async binaryToOctal(req, res, next) {
    try {
      let { number } = req.params;

      // Validate binary
      if (!validateBinary(number)) {
        return res.status(400).send('Enter a valid binary number');
      }

      const conversion = binaryConverter.toOctal(number);
      return res.send({ conversion });
    } catch (err) {
      console.log(err);

      return res.send(err);
    }
  },
};
