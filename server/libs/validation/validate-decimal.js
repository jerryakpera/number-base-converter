const { isValidStr } = require('../../utils/helper');

// Function to validate decimal numbers
function validateDecimal(decimal) {
  const decimalNo = isValidStr(decimal);
  if (!decimalNo) return false;

  if (/[^0123456789]/g.test(decimalNo)) return false;
  return decimalNo;
}

module.exports = validateDecimal;
