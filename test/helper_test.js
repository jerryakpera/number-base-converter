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
      'D 1 4 B 1 A 2'
    );
  });

  after(() => {
    console.log('convertNumbersToHexString');
  });
});

describe('getPowers', () => {
  const { getPowers } = require('../utils/helper');

  it('should be a module', () => {
    expect(getPowers).to.be.ok;
  });

  it('should return false if first argument is not a string', () => {
    expect(getPowers([11011])).to.be.false;
    expect(getPowers({ num: [11011] })).to.be.false;
  });

  it('should return an array with length equal to length of first argument', () => {
    expect(getPowers('10011101', 2)).to.be.an('array').with.length(8);
    expect(getPowers('1101', 4)).to.be.an('array').with.length(4);
  });

  it('should return an array of the numbers and their corresponding powers', () => {
    let result = [
      '1 : 64',
      '1 : 32',
      '0 : 16',
      '1 : 8',
      '0 : 4',
      '0 : 2',
      '1 : 1',
    ];
    expect(getPowers('1101001', 2)).to.deep.equal(result);

    result = ['1 : 256', '1 : 64', '0 : 16', '0 : 4', '1 : 1'];
    expect(getPowers('11001', 4)).to.deep.equal(result);
  });
});

describe('multiplyNoAndPower', () => {
  const { multiplyNoAndPower } = require('../utils/helper');

  it('should be a module', () => {
    expect(multiplyNoAndPower).to.be.ok;
  });

  it('should return false if argument is not an array of strings', () => {
    expect(multiplyNoAndPower('11011')).to.be.false;
    expect(multiplyNoAndPower({ num: [11011] })).to.be.false;

    const powers = [
      '1 : 64',
      '1 : 32',
      '0 : 16',
      '1 : 8',
      '0 : 4',
      '0 : 2',
      '1 : 1',
    ];

    expect(multiplyNoAndPower(powers)).to.be.ok;
  });

  it('should return a valid multiplication of rows', () => {
    const powers = [
      '1 : 64',
      '1 : 32',
      '0 : 16',
      '1 : 8',
      '0 : 4',
      '0 : 2',
      '1 : 1',
    ];

    const result = [
      '1 x 64 = 64',
      '1 x 32 = 32',
      '0 x 16 = 0',
      '1 x 8 = 8',
      '0 x 4 = 0',
      '0 x 2 = 0',
      '1 x 1 = 1',
    ];

    expect(multiplyNoAndPower(powers)).to.deep.equal(result);
  });
});

describe('addMultiples', () => {
  const { addMultiples } = require('../utils/helper');

  it('should be a module', () => {
    expect(addMultiples).to.be.ok;
  });

  it('should return false if argument is not an array of strings', () => {
    expect(addMultiples('11011')).to.be.false;
    expect(addMultiples({ num: [11011] })).to.be.false;

    const powers = [
      '1 x 64 = 64',
      '1 x 32 = 32',
      '0 x 16 = 0',
      '1 x 8 = 8',
      '1 x 4 = 4',
      '0 x 2 = 0',
      '1 x 1 = 1',
    ];

    expect(addMultiples(powers)).to.be.ok;
  });

  it('should return the total of all the answers for each line of multiplication', () => {
    const multiples = [
      '1 x 64 = 64',
      '1 x 32 = 32',
      '0 x 16 = 0',
      '1 x 8 = 8',
      '1 x 4 = 4',
      '0 x 2 = 0',
      '1 x 1 = 1',
    ];

    expect(addMultiples(multiples)).to.deep.equal({
      finalAnswer: 109,
      addition: '64 + 32 + 0 + 8 + 4 + 0 + 1 = 109',
    });
  });
});

describe('groupNumbers', () => {
  const { groupNumbers } = require('../utils/helper');

  it('should be a module', () => {
    expect(groupNumbers).to.be.ok;
  });

  it('should return false if first argument is not an array', () => {
    expect(groupNumbers({ str: 'solid' })).to.be.false;
    expect(groupNumbers([1, 2, 3, 3, 4])).to.be.ok;
  });

  it('should return a grouping of the first argument returned in same format with length of second argument', () => {
    expect(groupNumbers([1, 1, 0, 1, 1, 1, 1, 0], 3)).to.deep.equal([
      '11',
      '011',
      '110',
    ]);
  });
});

describe('addZeros', () => {
  const { addZeros } = require('../utils/helper');
  it('should be a module', () => {
    expect(addZeros).to.be.ok;
  });

  it('should append 0s if the first element of the arr is not correct length', () => {
    expect(addZeros(['0', '110', '101'], 3)).to.deep.equal([
      '000',
      '110',
      '101',
    ]);

    expect(addZeros(['11', '010'], 3)).to.deep.equal(['011', '010']);
  });
});
