const validate = require('../../validation');

const _helper = require('../../../utils/helper');

const binaryToDecimal = {
  conversionType: 'binaryToDecimal',
  notes: [
    'The binary numeral system uses the number 2 as its base (radix). As a base-2 numeral system, it consists of only two numbers: 0 and 1',
    'The decimal (decimal) numeral system is the most commonly used and the standard system in daily life. It uses the number 10 as its base (radix). Therefore, it has 10 symbols: The numbers from 0 to 9; namely 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.',
  ],
  converting: {
    from: {
      text: 'binary',
      desc: 'Binary numbers (base-2) use only 0s and 1s',
    },
    to: {
      text: 'decimal',
      desc: 'Decimal or decimal numbers (base-10) use 0 - 9',
    },
  },
  steps: [
    {
      no: 1,
      title: 'Step 1',
      name: 'Write down binary numbers',
      description: 'Write down the binary number and list the powers of 2 .',
      hint: 'Space each binary digit out a bit',
      rows: {},
    },
    {
      no: 2,
      title: 'Step 2',
      name: 'Write powers of 2s',
      description:
        'Write the digits of the binary number below their corresponding powers of two ',
      hint: 'Start from 1 and keep doubling till you run out of binary numbers',
      rows: {},
    },
    {
      no: 3,
      title: 'Step 3',
      name: 'Multiply binary and power of two',
      description:
        'Multiply each binary digit with its corresponding power of two',
      notes:
        'Move through each digit of the binary number. If the digit is a 1, write its corresponding power of two below the line, under the digit. If the digit is a 0, write a 0.',
      rows: {},
    },
    {
      no: 4,
      title: 'Step 4',
      name: 'Add the final values.',
      description:
        'Now, add up the products you got from the previous step  and that is your answer',
      rows: {},
    },
  ],
  finalAnswer: '',
};

// Function that takes a binary no and converts it to binary
function toDecimal(binary) {
  // Check if binary no is valid
  const binaryIsValid = validate.binary(binary);
  if (!binaryIsValid) return false;

  const conversion = _helper.getConversion(binaryToDecimal, binary);

  // Step 1
  // Write the binary number
  const step1Row = binary.split('');
  conversion.steps[0].rows = step1Row;
  // END OF STEP 1

  // Step 2
  // Write down the powers of 2 next to the number
  let powers = _helper.getPowers(binary, 2);
  conversion.steps[1].rows = powers;
  // END OF STEP 2

  // Step 3
  // Multiply the binary no times its corresponding power of two
  const multiples = _helper.multiplyNoAndPower(powers);
  conversion.steps[2].rows = multiples;
  // END OF STEP 3

  // Step 4
  // Write out binary no
  const answer = _helper.addMultiples(multiples);
  conversion.steps[3].rows = answer.addition;
  conversion.finalAnswer = answer.finalAnswer;
  // END OF STEP 4

  return conversion;
}

module.exports = toDecimal;
