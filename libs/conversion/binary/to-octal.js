const validate = require('../../validation');

const _helper = require('../../../utils/helper');

const binaryToOctal = {
  conversionType: 'binaryToOctal',
  notes: [
    'Binary and octal systems are different number systems commonly used in computing. They have different bases -- binary is base-two and octal base-eight -- meaning they must be grouped to convert. This, however, sounds far more complicated than this very easy conversion actually is',
    "Binary numbers are simply strings of 1's and 0's, such as 101001, 001, or even just 1. If you see this kind of string it is usually binary.",
  ],
  converting: {
    from: {
      text: 'binary',
      desc: 'Binary numbers (base-2) use only 0s and 1s',
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
      name: 'Write down the binary number',
      description:
        'Write down the binary number. We write it from top to bottom as this makes it easier to do future operations',
      notes:
        'There are two different binary numbers and only eight octal. Since 2^3=8, youll need three binary numbers to designate each octal number. Start from the right to make your groups. For example, the binary number 101001 would break down to 101 001',
      rows: {},
    },
    {
      no: 2,
      title: 'Step 2',
      name: 'Group the binary numbers in groups of three',
      description:
        'Group all the 1s and 0s in the binary number in sets of three, starting from the far right.',
      notes:
        'The binary number 10011011 has eight digits, which, though not a multiple of three, can still convert to octal. Just add extra zeros to your front group until it has three places',
      hint: 'Space each group out a bit',
      rows: {},
    },
    {
      no: 3,
      title: 'Step 3',
      name: 'Add zeros',
      description:
        'Add zeros to the left of the last group if the digits are not up to three',
      notes:
        'The binary number 10011011 has eight digits, which, though not a multiple of three, can still convert to octal. Just add extra zeros to your front group until it has three places',
      hint: '4, 2, 1 represents 2^2, 2^1 and 2^0',
      rows: {},
    },
    {
      no: 4,
      title: 'Step 4',
      name: 'Get the corresponding power of 2',
      description:
        'Add a 4, 2, and a 1 underneath each set of three numbers to note your placeholders',
      hint: 'You can always skip the 0 binary digits',
      notes:
        'Each of the three binary numbers in a set stands for a place in the octal number system. The first number is for a 4, the second a 2, and the third a 1. In ours the binary no is to the left of the colon and the power of 2 is to the right eg (binary: powerOf2).',
      rows: {},
    },
    {
      no: 5,
      title: 'Step 5',
      name: 'Multiply binary and power of 2',
      description:
        'Starting from left to right multipy each power of two with its corresponding binary number',
      notes:
        'Once you know what places are in the octal number, simply add up each set of three individually. So, for 101, which turns into 4, 0, and 1, you end up with 5.',
      hint: 'If your total is greater than 7 then you made a mistake somewhere',
      example: '( 0 x 4 = 0 ) , ( 1 x 2 = 2 ) , ( 0 x 1 = 0 ) = 0 + 2 + 0 ',
      rows: {},
    },
    {
      no: 6,
      title: 'Step 6',
      name: 'Joining totals',
      description: 'Add up the totals of the previos operation',
      notes:
        'Splitting up the binary number was just to make solving easier -- the original number was one lone string. So, now that youve converted, put everything back together to get your final answer. That is all it takes.',
      rows: {},
    },
  ],
  finalAnswer: '',
};

// Function that takes a binary no and converts it to an octal no
function toOctal(binary) {
  // Check if binary no is valid
  const binaryIsValid = validate.binary(binary);
  if (!binaryIsValid) return false;

  const conversion = _helper.getConversion(binaryToOctal, binary);

  // Step 1
  // Write the binary number
  const step1Row = binary.split('');
  conversion.steps[0].rows = step1Row;
  // END OF STEP 1

  // STEP 2
  // Group binary no in groups of 3s
  const groups = _helper.groupNumbers([...step1Row], 3);
  conversion.steps[1].rows = groups;
  // END OF STEP 3

  // STEP 3
  // Add 0s
  const zeros = _helper.addZeros([...groups], 3);
  conversion.steps[2].rows = zeros;
  // END OF STEP 2

  // Step 4
  // Write power of twos
  let powersArr = [];
  const formattedArr = zeros.map((zero) => {
    let ans = _helper.getPowers(zero, 2);
    powersArr.push(ans);

    ans = ans.map((a, i) => {
      return ` ( ${a} ) `;
    });

    return ans;
  });
  conversion.steps[3].rows = formattedArr;
  // END OF STEP 4

  // Step 5
  // Find the multiples
  let multiplicationArr = [];
  let formattedMultiples = powersArr.map((arr) => {
    let multiplication = _helper.multiplyNoAndPower(arr);
    multiplicationArr.push(multiplication);

    return multiplication.map((multiple) => {
      return ` ( ${multiple} ) `;
    });
  });
  conversion.steps[4].rows = formattedMultiples;

  // END OF STEP 5

  // Step 6
  // Multiply each binary number with its corresponding power of two
  let total = {
    str: '',
    total: '',
  };
  multiplicationArr.forEach((multiple, i) => {
    let ans = _helper.addMultiples(multiple);

    total.total += ans.finalAnswer;
    total.str += `${ans.finalAnswer}`;
    if (i < multiplicationArr.length - 1) total.str += ' ';
  });

  total.str += ` = ${total.total}`;
  conversion.steps[5].rows = total.str;
  conversion.finalAnswer = total.total;

  return conversion;
}

toOctal('1101101');

module.exports = toOctal;
