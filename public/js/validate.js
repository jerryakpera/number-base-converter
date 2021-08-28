function isValidStr(str) {
  if (typeof str !== 'string') return false;

  const validStr = str.trim();
  if (validStr === '') return false;

  return validStr.replace(/ /g, '');
}

// Function to validate binary numbers
function validateBinary(binary) {
  const binaryNo = isValidStr(binary);
  if (!binaryNo) return false;

  // Ensure binary string only has 1s and 0s
  if (/[^10]/g.test(binaryNo)) return false;

  return binaryNo;
}

// Function to validate decimal numbers
function validateDecimal(decimal) {
  const decimalNo = isValidStr(decimal);
  if (!decimalNo) return false;

  if (/[^0123456789]/g.test(decimalNo)) return false;
  return decimalNo;
}

// Function to validate hex numbers
function validateHexadecimal(hex) {
  const hexNo = isValidStr(hex);
  if (!hexNo) return false;

  if (/[^0123456789abcdef]/g.test(hexNo)) return false;
  return hexNo;
}

// Function to validate octal numbers
function validateOctal(octal) {
  const octalNo = isValidStr(octal);
  if (!octalNo) return false;

  if (/[^01234567]/g.test(octalNo)) return false;

  return octalNo;
}
