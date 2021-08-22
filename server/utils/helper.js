const _ = require('lodash');

function isValidStr(str) {
  if (typeof str !== 'string') return false;

  const validStr = _.trim(str);
  if (validStr === '') return false;

  return validStr.replace(/ /g, '');
}

function getConversion(conversion, numberToConvert) {
  const conversionObj = {
    ...conversion,
  };

  conversionObj.converting.numberToConvert = {
    text: numberToConvert,
    desc: 'The number we are converting',
  };
  return conversionObj;
}

function decimalToQuotientAndRemainders(num, no) {
  const decimalNo = Number(num);
  if (!decimalNo || !Number.isInteger(decimalNo)) return false;
  if (!no || !Number.isInteger(no) || no > 16) return false;

  const remainders = [];

  const rows = [];

  let temp = decimalNo;

  while (temp > 0) {
    const rawQuotient = temp / no;
    const remainder = rawQuotient % 1;
    const wQuotient = rawQuotient - remainder;
    const wRemainder = no * remainder;

    remainders.push(remainder !== 0 ? wRemainder : 0);

    rows.push(
      `${temp} ÷ ${no} = ${wQuotient} r ${remainder !== 0 ? wRemainder : 0}`,
    );
    temp = Math.floor(temp / no);
  }

  return { rows, remainders };
}

function convertNumbersToHexString(hexStr) {
  if (typeof hexStr !== 'string') return false;
  if (hexStr.trim().length === 0) return false;

  const hex = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };

  return hexStr
    .split(' ')
    .map((no) => {
      if (no <= 9) return no;
      return hex[no];
    })
    .join(' ');
}

module.exports = {
  isValidStr,
  getConversion,
  decimalToQuotientAndRemainders,
  convertNumbersToHexString,
};
