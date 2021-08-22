const { isValidStr } = require('../../utils/helper');

// Function to validate hex numbers
function validateHexadecimal(hex) {
  const hexNo = isValidStr(hex);
  if (!hexNo) return false;

  if (/[^0123456789abcdef]/g.test(hexNo)) return false;
  return hexNo;
}

module.exports = validateHexadecimal;
