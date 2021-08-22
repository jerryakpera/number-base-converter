/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

const { expect } = require('chai');

describe('validateBinary', () => {
  const validateBinary = require('../libs/validation/validate-binary');

  it('should be a module', () => {
    expect(validateBinary).to.be.ok;
  });

  it('should return false if argument is empty or not a string', () => {
    expect(validateBinary(2221)).to.be.false;
    expect(validateBinary()).to.be.false;
    expect(validateBinary('   ')).to.be.false;
    expect(validateBinary(['   ', 22])).to.be.false;
    expect(validateBinary({ a: 'ss', b: 22 })).to.be.false;
  });

  it('should return false if argument is not a binary number', () => {
    expect(validateBinary('2221')).to.be.false;
    expect(validateBinary('4431')).to.be.false;
    expect(validateBinary('ss7d')).to.be.false;
  });

  it('should return trimmed argument if argument is a valid binary no', () => {
    expect(validateBinary('110 101')).to.equal('110101');
    expect(validateBinary('110   ')).to.equal('110');
    expect(validateBinary('00001011')).to.equal('00001011');
  });

  after(() => {
    console.log('validateBinary tests completed');
  });
});

describe('validateOctal', () => {
  const validateOctal = require('../libs/validation/validate-octal');

  it('should be a module', () => {
    expect(validateOctal).to.be.ok;
  });

  it('should return false if argument is empty or not a string', () => {
    expect(validateOctal()).to.be.false;
    expect(validateOctal('   ')).to.be.false;
    expect(validateOctal(['   ', 22])).to.be.false;
    expect(validateOctal({ a: 'ss', b: 22 })).to.be.false;
  });

  it('should return false if argument is not a octal number', () => {
    expect(validateOctal(445)).to.be.false;
    expect(validateOctal('8004')).to.be.false;
    expect(validateOctal('61as')).to.be.false;
    expect(validateOctal('ss7d')).to.be.false;
  });

  it('should return trimmed argument if argument is a valid octal no', () => {
    expect(validateOctal('70045')).to.equal('70045');
    expect(validateOctal('345   6')).to.equal('3456');
    expect(validateOctal('7704412')).to.equal('7704412');
  });

  after(() => {
    console.log('validateOctal tests completed');
  });
});

describe('validateDecimal', () => {
  const validateDecimal = require('../libs/validation/validate-decimal');

  it('should be a module', () => {
    expect(validateDecimal).to.be.ok;
  });

  it('should return false if argument is empty or not a string', () => {
    expect(validateDecimal()).to.be.false;
    expect(validateDecimal('   ')).to.be.false;
    expect(validateDecimal(['   ', 22])).to.be.false;
    expect(validateDecimal({ a: 'ss', b: 22 })).to.be.false;
  });

  it('should return false if argument is not a decimal number', () => {
    expect(validateDecimal('4ss45')).to.be.false;
    expect(validateDecimal('800s4')).to.be.false;
    expect(validateDecimal('61as')).to.be.false;
    expect(validateDecimal('ss7d')).to.be.false;
  });

  it('should return trimmed argument if argument is a valid decimal no', () => {
    expect(validateDecimal('700 8845')).to.equal('7008845');
    expect(validateDecimal('345 89  6')).to.equal('345896');
    expect(validateDecimal('770984412')).to.equal('770984412');
  });

  after(() => {
    console.log('validateDecimal tests completed');
  });
});

describe('validateHexadecimal', () => {
  const validateHexadecimal = require('../libs/validation/validate-hexadecimal');

  it('should be a module', () => {
    expect(validateHexadecimal).to.be.ok;
  });

  it('should return false if argument is empty or not a string', () => {
    expect(validateHexadecimal()).to.be.false;
    expect(validateHexadecimal('   ')).to.be.false;
    expect(validateHexadecimal(['   ', 22])).to.be.false;
    expect(validateHexadecimal({ a: 'ss', b: 22 })).to.be.false;
  });

  it('should return false if argument is not a decimal number', () => {
    expect(validateHexadecimal('4ss45')).to.be.false;
    expect(validateHexadecimal('800s4')).to.be.false;
    expect(validateHexadecimal('61as')).to.be.false;
    expect(validateHexadecimal('ss7d')).to.be.false;
  });

  it('should return trimmed argument if argument is a valid decimal no', () => {
    expect(validateHexadecimal('700 aabc 8845')).to.equal('700aabc8845');
    expect(validateHexadecimal('345 89  6f')).to.equal('345896f');
    expect(validateHexadecimal('7a7098d4412')).to.equal('7a7098d4412');
  });

  after(() => {
    console.log('validateHexadecimal tests completed');
  });
});
