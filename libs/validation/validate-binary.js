const { isValidStr } = require('../../utils/helper');

// Function to validate binary numbers
function validateBinary(binary) {
  const binaryNo = isValidStr(binary);
  if (!binaryNo) return false;

  // Ensure binary string only has 1s and 0s
  if (/[^10]/g.test(binaryNo)) return false;

  return binaryNo;
}

module.exports = validateBinary;
