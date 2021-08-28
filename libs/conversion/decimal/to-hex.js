const validate = require('../../validation');

const _helper = require('../../../utils/helper');

const decimalToHex = {
  conversionType: 'decimalToHex',
  notes: [
    'The denary (base ten) numeral system has ten possible values (0,1,2,3,4,5,6,7,8, or 9) for each place-value.',
    'Hexadecimal is a base sixteen numeral system. This means it has 16 symbols that can represent a single digit, adding A, B, C, D, E, and F on top of the usual ten numerals.',
  ],
  converting: {
    from: {
      text: 'denary',
      desc: 'Denary numbers (base-10) use 0 - 9',
    },
    to: {
      text: 'hexadecimal',
      desc: 'Hexadecimal numbers (base-16) use 0 - 9 & A - F',
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
      name: 'Next, divide the decimal number by 16',
      description:
        'You will get a whole number and a remainder between 0 and 15. Write the integer and the remainder.',
      notes:
        'Set aside the remainder and return to your division problem. Take your answer and divide by 16 again. Note the answer, then find the remainder',
      hint: 'Since we are dividing by 16, The remainder will always be below 16',
      example: '87 ÷ 16 = 5 r 7',
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
      name: 'Write out the remainders',
      description:
        'Change any number above "9" into its corresponding hex letter',
      notes:
        'This is the chart to convert numbers greater than 9, 10 = A, 11 = B, 12 = C, 13 = D, 14 = E, 15 = F. This is so you dont get confused when reading hexadecimal ("is that a 1 and a 5, or a 15?")',
      rows: {},
    },
    {
      no: 5,
      title: 'Step 5',
      name: 'Write out the new, hexadecimal number',
      description:
        'Starting with the bottom remainder, write out the new hexadecimal number',
      notes:
        'This method can be modified to convert from decimal to any base. The divisor is 2 because the desired destination is base 2 (binary). If the desired destination is a different base, replace the 2 in the method with the desired base. For example, if the desired destination is base 9, replace the 2 with 9. The final result will then be in the desired base',
      rows: {},
      summary: 'That is your final answer',
    },
  ],
  finalAnswer: '',
};

// Function that takes a decimal no and converts it to hex
function toHex(decimal) {
  // Check if decimal no is valid
  const decimalIsValid = validate.decimal(decimal);
  if (!decimalIsValid) return false;

  const conversion = _helper.getConversion(decimalToHex, decimal);

  // Step 1
  // Write the decimal number
  const step1Row = [decimal];
  conversion.steps[0].rows = step1Row;
  // END OF STEP 1

  // Step 2
  // Example divide by 16
  const step2Row = _helper.decimalToQuotientAndRemainders(decimal, 16);
  conversion.steps[1].rows = step2Row.rows[0];
  // END OF STEP 2

  // Step 3
  // Repeat step 2 till you reach 0
  const step3Row = _helper.decimalToQuotientAndRemainders(decimal, 16);
  conversion.steps[2].rows = step3Row.rows;
  // END OF STEP 3

  // Step 4
  // Write out remainders
  const step4Row1 = step3Row.remainders.join(' ');
  conversion.steps[3].rows = [step4Row1];

  // END OF STEP 4

  // Step 5
  // Convert numbers higher than 9 to hex
  const step5Row1 = step4Row1;
  const step5Row2 = _helper.convertNumbersToHexString(step4Row1);
  const step5Row3 = step5Row2.replace(/ /g, '');
  conversion.steps[4].rows = [step5Row1, step5Row2, step5Row3];

  conversion.finalAnswer = step5Row3;
  // END OF STEP 5

  return conversion;
}

toHex('91');

module.exports = toHex;
