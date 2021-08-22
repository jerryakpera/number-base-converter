const _ = require('lodash');
const validate = require('../../validation');

const _helper = require('../../../utils/helper');

const decimalToOctal = {
  conversionType: 'decimalToOctal',
  notes: [
    'The decimal (base ten) numeral system has ten possible values (0,1,2,3,4,5,6,7,8, or 9) for each place-value.',
    'Octal is the base 8 number system, that only uses the digits 0 through 7. Its main advantage is the ease of conversion with binary (base 2), since each digit in octal can be written as a unique three-digit binary number',
  ],
  converting: {
    from: {
      text: 'decimal',
      desc: 'Decimal numbers (base-10) use 0 - 9',
    },
    to: {
      text: 'octal',
      desc: 'Octal numbers (base-8) use 0 - 7',
    },
  },
  steps: [
    {
      no: 1,
      title: 'Step 1',
      name: 'Begin by writing down the decimal number',
      description: 'Write out your number in full',
      rows: {},
    },
    {
      no: 2,
      title: 'Step 2',
      name: 'Next, divide the decimal number by 8',
      description:
        'You will get a whole number and a remainder between 0 and 7. Write the integer and the remainder.',
      notes:
        'Set aside the remainder and return to your division problem. Take your answer and divide by 8 again. Note the answer, then find the remainder',
      hint: 'Since we are dividing by 8, The remainder will always be below 8',
      example: '45 ÷ 8 = 5 r 5',
      rows: {},
    },
    {
      no: 3,
      title: 'Step 3',
      name: 'Repeat step 2 till you reach 0',
      description:
        'Keep dividing and writing out the quotient and the remainder till you get to 0',
      rows: {},
    },
    {
      no: 4,
      title: 'Step 4',
      name: 'Write out the new, octal number',
      description:
        'Starting with the bottom remainder, write out the new octal number',
      notes:
        'This method can be modified to convert from decimal to any base. The divisor is 2 because the desired destination is base 2 (binary). If the desired destination is a different base, replace the 2 in the method with the desired base. For example, if the desired destination is base 9, replace the 2 with 9. The final result will then be in the desired base',
      rows: {},
      summary: 'That is your final answer',
    },
  ],
  finalAnswer: '',
};

// Function that takes a decimal no and converts it to octal
function toOctal(decimal) {
  // Check if decimal no is valid
  const decimalIsValid = validate.decimal(decimal);
  if (!decimalIsValid) return false;

  const conversion = _helper.getConversion(decimalToOctal, decimal);

  // Step 1
  // Write the decimal number
  const step1Row = [decimal];
  conversion.steps[0].rows = step1Row;
  // END OF STEP 1

  // Step 2
  // Example divide by 8
  const step2Row = _helper.decimalToQuotientAndRemainders(decimal, 8);
  conversion.steps[1].rows = step2Row.rows[0];
  // END OF STEP 2

  // Step 3
  // Repeat step 2 till you reach 0
  const step3Row = _helper.decimalToQuotientAndRemainders(decimal, 8);
  conversion.steps[2].rows = step3Row.rows;
  // END OF STEP 3

  // Step 4
  // Write out octal no
  const step4Row1 = step3Row.remainders.join(' ');
  let step4Row2 = step4Row1.replace(/ /g, '');

  step4Row2 = _.trimStart(step4Row2, '0');

  conversion.steps[3].rows = [step4Row1, step4Row2];

  conversion.finalAnswer = step4Row2;
  // END OF STEP 4

  return conversion;
}

toOctal('32');

module.exports = toOctal;
