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
      `${temp} ÷ ${no} = ${wQuotient} r ${remainder !== 0 ? wRemainder : 0}`
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

function getPowers(num, power = 2) {
  if (typeof num !== 'string') return false;
  let rows = num.split('').reverse();

  return rows
    .map((row, i) => {
      return `${row} : ${power ** i}`;
    })
    .reverse();
}

function multiplyNoAndPower(arr) {
  if (!Array.isArray(arr)) return false;

  return arr.map((line) => {
    let [no, power] = line.split(' : ');

    no = +no;
    power = +power;

    return `${no} x ${power} = ${no * power}`;
  });
}

function addMultiples(arr) {
  if (!Array.isArray(arr)) return false;

  let additionLine = '';

  let total = arr
    .map((line, i) => {
      let [calc, ans] = line.split(' = ');
      ans = +ans;

      if (i < arr.length - 1) additionLine += `${ans} + `;
      else additionLine += `${ans} =`;

      return ans;
    })
    .reduce((num, total) => num + total, 0);

  return {
    finalAnswer: total,
    addition: `${additionLine} ${total}`,
  };
}

function groupNumbers(str, len) {
  if (!Array.isArray(str)) return false;

  let returnArr = [];

  str.reverse().forEach((char, i) => {
    if (i > 0 && i % len === 0) {
      returnArr.unshift('*');
    }
    returnArr.unshift(char);
  });

  return returnArr.join('').split('*');
}

function addZeros(arr, len) {
  while (arr[0].length < len) {
    arr[0] = '0' + arr[0];
  }

  return arr;
}

module.exports = {
  isValidStr,
  getConversion,
  decimalToQuotientAndRemainders,
  convertNumbersToHexString,
  getPowers,
  multiplyNoAndPower,
  addMultiples,
  groupNumbers,
  addZeros,
};
