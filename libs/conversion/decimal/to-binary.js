const validate = require('../../validation');

const _helper = require('../../../utils/helper');

const decimalToBinary = {
  conversionType: 'decimalToBinary',
  notes: [
    'The decimal (base ten) numeral system has ten possible values (0, 1, 2, 3, 4, 5, 6, 7, 8, or 9) for each place-value.',
    'In contrast, the binary (base two) numeral system has two possible values represented as 0 or 1 for each place-value',
  ],
  converting: {
    from: {
      text: 'decimal',
      desc: 'decimal numbers (base-10) use 0 - 9',
    },
    to: {
      text: 'binary',
      desc: 'Binary numbers (base-2) use only 0 and 1',
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
      name: 'Next, divide the decimal number by 2',
      description:
        'You will get a whole number and a remainder (either 1 or 0). Write the integer and the remainder.',
      hint: 'Since we are dividing by 2, when the dividend is even the binary remainder will be 0, and when the dividend is odd the binary remainder will be 1.',
      example: '45 ÷ 2 = 22 r 1',
      rows: {},
    },
    {
      no: 3,
      title: 'Step 3',
      name: 'Repeat step 2 till you reach 0',
      description:
        'Keep dividing and writing out the quotient and the remainder till the interger gets to 0',
      rows: {},
    },
    {
      no: 4,
      title: 'Step 4',
      name: 'Write out the new, binary number',
      description:
        'Starting with the bottom remainder, write out the new binary number',
      notes:
        'This method can be modified to convert from decimal to any base. The divisor is 2 because the desired destination is base 2 (binary). If the desired destination is a different base, replace the 2 in the method with the desired base. For example, if the desired destination is base 9, replace the 2 with 9. The final result will then be in the desired base',
      rows: {},
      summary: 'That is your final answer',
    },
  ],
  finalAnswer: '',
};

// Function that takes a decimal no and converts it to binary
function toBinary(decimal) {
  // Check if decimal no is valid
  const decimalIsValid = validate.decimal(decimal);
  if (!decimalIsValid) return false;

  const conversion = _helper.getConversion(decimalToBinary, decimal);

  // Step 1
  // Write the decimal number
  const step1Row = [decimal];
  conversion.steps[0].rows = step1Row;
  // END OF STEP 1

  // Step 2
  // Example divide by 2
  const step2Row = _helper.decimalToQuotientAndRemainders(decimal, 2);
  conversion.steps[1].rows = step2Row.rows[0];
  // END OF STEP 2

  // Step 3
  // Repeat step 2 till you reach 0
  const step3Row = _helper.decimalToQuotientAndRemainders(decimal, 2);
  conversion.steps[2].rows = step3Row.rows;
  // END OF STEP 3

  // Step 4
  // Write out binary no
  const step4Row1 = step3Row.remainders.join(' ');
  const step4Row2 = step4Row1.replace(/ /g, '');
  conversion.steps[3].rows = [step4Row1, step4Row2];
  conversion.finalAnswer = step4Row2;
  // END OF STEP 4

  return conversion;
}

module.exports = toBinary;
