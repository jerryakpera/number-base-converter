/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

const { expect } = require('chai');

describe('decimal', () => {
  const { convertDecimalNumber } = require('../libs/conversion');

  describe('toBinary', () => {
    it('should be a module', () => {
      expect(convertDecimalNumber.toBinary).to.be.ok;
    });

    it('should return false if argument is not a valid decimal no as a string', () => {
      expect(convertDecimalNumber.toBinary(223)).to.be.false;
      expect(convertDecimalNumber.toBinary('cc223')).to.be.false;
      expect(convertDecimalNumber.toBinary('22873')).to.be.ok;
    });

    it('should return a conversion object with valid properties', () => {
      const properties = [
        'conversionType',
        'notes',
        'converting',
        'steps',
        'finalAnswer',
      ];

      expect(convertDecimalNumber.toBinary('45')).to.have.all.keys(properties);
    });

    it('should return a valid conversion object with step rows', () => {
      expect(convertDecimalNumber.toBinary('45')).to.deep.include({
        finalAnswer: '101101',
      });
      expect(convertDecimalNumber.toBinary('45').steps[0]).to.deep.include({
        rows: ['45'],
      });
      expect(convertDecimalNumber.toBinary('45').steps[1]).to.deep.include({
        rows: '45 ÷ 2 = 22 r 1',
      });
      expect(convertDecimalNumber.toBinary('45').steps[2]).to.deep.include({
        rows: [
          '45 ÷ 2 = 22 r 1',
          '22 ÷ 2 = 11 r 0',
          '11 ÷ 2 = 5 r 1',
          '5 ÷ 2 = 2 r 1',
          '2 ÷ 2 = 1 r 0',
          '1 ÷ 2 = 0 r 1',
        ],
      });
      expect(convertDecimalNumber.toBinary('45').steps[3]).to.deep.include({
        rows: ['1 0 1 1 0 1', '101101'],
      });
    });

    after(() => {
      console.log('convertDecimal toBinary tests completed');
    });
  });

  describe('toOctal', () => {
    it('should be a module', () => {
      expect(convertDecimalNumber.toOctal).to.be.ok;
    });

    it('should return false if argument is not a valid decimal no', () => {
      expect(convertDecimalNumber.toOctal(872)).to.be.false;
      expect(convertDecimalNumber.toOctal('66s')).to.be.false;
      expect(convertDecimalNumber.toOctal('699845')).to.be.ok;
    });

    it('should return a conversion object with valid properties', () => {
      const properties = [
        'conversionType',
        'notes',
        'converting',
        'steps',
        'finalAnswer',
      ];

      expect(convertDecimalNumber.toOctal('45')).to.have.all.keys(properties);
      expect(convertDecimalNumber.toOctal('447')).to.have.all.keys(properties);
    });

    it('should return a valid conversion object with step rows', () => {
      expect(convertDecimalNumber.toOctal('32')).to.deep.include({
        finalAnswer: '4',
      });

      expect(convertDecimalNumber.toOctal('32').steps[0]).to.deep.include({
        rows: ['32'],
      });

      expect(convertDecimalNumber.toOctal('32').steps[1]).to.deep.include({
        rows: '32 ÷ 8 = 4 r 0',
      });

      expect(convertDecimalNumber.toOctal('32').steps[2]).to.deep.include({
        rows: ['32 ÷ 8 = 4 r 0', '4 ÷ 8 = 0 r 4'],
      });

      expect(convertDecimalNumber.toOctal('32').steps[3]).to.deep.include({
        rows: ['0 4', '4'],
      });
    });

    after(() => {
      console.log('convertDecimal toOctal tests completed');
    });
  });

  describe('toHex', () => {
    it('should be a module', () => {
      expect(convertDecimalNumber.toHex).to.be.ok;
    });

    it('should return false if argument is not a valid decimal no', () => {
      expect(convertDecimalNumber.toHex(872)).to.be.false;
      expect(convertDecimalNumber.toHex('781ab')).to.be.false;
      expect(convertDecimalNumber.toHex('781')).to.be.ok;
      expect(convertDecimalNumber.toHex('6645')).to.be.ok;
    });

    it('should return a conversion object with valid properties', () => {
      const properties = [
        'conversionType',
        'notes',
        'converting',
        'steps',
        'finalAnswer',
      ];

      expect(convertDecimalNumber.toHex('98')).to.have.all.keys(properties);
      expect(convertDecimalNumber.toHex('19')).to.have.all.keys(properties);
      expect(convertDecimalNumber.toHex('102')).to.have.all.keys(properties);
    });

    it('should return a valid conversion object with step rows', () => {
      expect(convertDecimalNumber.toHex('91')).to.deep.include({
        finalAnswer: 'B5',
      });

      expect(convertDecimalNumber.toHex('91').steps[0]).to.deep.include({
        rows: ['91'],
      });

      expect(convertDecimalNumber.toHex('91').steps[1]).to.deep.include({
        rows: '91 ÷ 16 = 5 r 11',
      });

      expect(convertDecimalNumber.toHex('91').steps[2]).to.deep.include({
        rows: ['91 ÷ 16 = 5 r 11', '5 ÷ 16 = 0 r 5'],
      });

      expect(convertDecimalNumber.toHex('91').steps[3]).to.deep.include({
        rows: ['11 5'],
      });

      expect(convertDecimalNumber.toHex('91').steps[4]).to.deep.include({
        rows: ['11 5', 'B 5', 'B5'],
      });
    });

    after(() => {
      console.log('convertDecimal toHex tests completed');
    });
  });
});
