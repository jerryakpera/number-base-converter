/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

const { expect } = require('chai');

describe('isValidStr', () => {
  const { isValidStr } = require('../utils/helper');

  it('should be a module', () => {
    expect(isValidStr).to.be.ok;
  });

  it('should return false if argument is not a string or is empty string', () => {
    expect(isValidStr(22113)).to.be.false;
    expect(isValidStr([22113, 34])).to.be.false;
    expect(isValidStr({ start: [22113, 34] })).to.be.false;
    expect(isValidStr('')).to.be.false;
  });

  it('should return str if argument is a valid string', () => {
    expect(isValidStr('22113')).to.equal('22113');
    expect(isValidStr('xyz')).to.equal('xyz');
  });

  after(() => {
    console.log('isValidStr tests completed');
  });
});

describe('decimalToQuotientAndRemainders', () => {
  const { decimalToQuotientAndRemainders } = require('../utils/helper');

  it('should be a module', () => {
    expect(decimalToQuotientAndRemainders).to.be.ok;
  });

  it('should return false if both arguments are not integers', () => {
    expect(decimalToQuotientAndRemainders(22.3, 3)).to.be.false;
    expect(decimalToQuotientAndRemainders(22)).to.be.false;
    expect(decimalToQuotientAndRemainders(22, 8)).to.be.ok;
    expect(decimalToQuotientAndRemainders(22, 8.3)).to.be.false;
  });

  it('should return false if second argument is not less than or equal to 16', () => {
    expect(decimalToQuotientAndRemainders(22, 18)).to.be.false;
    expect(decimalToQuotientAndRemainders(105, 3)).to.be.ok;
  });

  it('should return an object with a rows array and a remainders array with division by 2 calculations from no to 0 showing quotient and remainders', () => {
    const resultFor22 = {
      rows: [
        '22 ÷ 2 = 11 r 0',
        '11 ÷ 2 = 5 r 1',
        '5 ÷ 2 = 2 r 1',
        '2 ÷ 2 = 1 r 0',
        '1 ÷ 2 = 0 r 1',
      ],
      remainders: [0, 1, 1, 0, 1],
    };

    const resultFor45 = {
      rows: [
        '45 ÷ 2 = 22 r 1',
        '22 ÷ 2 = 11 r 0',
        '11 ÷ 2 = 5 r 1',
        '5 ÷ 2 = 2 r 1',
        '2 ÷ 2 = 1 r 0',
        '1 ÷ 2 = 0 r 1',
      ],
      remainders: [1, 0, 1, 1, 0, 1],
    };

    expect(decimalToQuotientAndRemainders(22, 2)).to.deep.equal(resultFor22);
    expect(decimalToQuotientAndRemainders(45, 2)).to.deep.equal(resultFor45);
  });

  it('should return an object with a rows array and a remainders array with division by 8 calculations from no to 0 showing quotient and remainders', () => {
    const resultFor87 = {
      rows: ['87 ÷ 8 = 10 r 7', '10 ÷ 8 = 1 r 2', '1 ÷ 8 = 0 r 1'],
      remainders: [7, 2, 1],
    };

    const resultFor50 = {
      rows: ['50 ÷ 8 = 6 r 2', '6 ÷ 8 = 0 r 6'],
      remainders: [2, 6],
    };

    const resultFor45 = {
      rows: ['45 ÷ 8 = 5 r 5', '5 ÷ 8 = 0 r 5'],
      remainders: [5, 5],
    };

    expect(decimalToQuotientAndRemainders(87, 8)).to.deep.equal(resultFor87);
    expect(decimalToQuotientAndRemainders(50, 8)).to.deep.equal(resultFor50);
    expect(decimalToQuotientAndRemainders(45, 8)).to.deep.equal(resultFor45);
  });
});

describe('convertNumbersToHexString', () => {
  const { convertNumbersToHexString } = require('../utils/helper');

  it('should be a module', () => {
    expect(convertNumbersToHexString).to.be.ok;
  });

  it('should return false if argument is not a string or is empty', () => {
    expect(convertNumbersToHexString(13)).to.be.false;
    expect(convertNumbersToHexString([13])).to.be.false;
    expect(convertNumbersToHexString({ a: [13] })).to.be.false;
    expect(convertNumbersToHexString('')).to.be.false;
    expect(convertNumbersToHexString('  ')).to.be.false;
  });

  it('should change any number higher than 9 to its hex equivelent', () => {
    expect(convertNumbersToHexString('13 3')).to.equal('D 3');
    expect(convertNumbersToHexString('13 1 4 11 1 10 2')).to.equal(
      'D 1 4 B 1 A 2',
    );
  });

  after(() => {
    console.log('convertNumbersToHexString');
  });
});
