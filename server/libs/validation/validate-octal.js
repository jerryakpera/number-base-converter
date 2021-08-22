const { isValidStr } = require('../../utils/helper');

// Function to validate octal numbers
function validateOctal(octal) {
  const octalNo = isValidStr(octal);
  if (!octalNo) return false;

  if (/[^01234567]/g.test(octalNo)) return false;

  return octalNo;
}

module.exports = validateOctal;
