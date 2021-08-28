document.addEventListener('DOMContentLoaded', (event) => {
  const numberInput = document.getElementById('number-to-convert');
  const convertFromInput = document.getElementById('convert-from');
  const convertToInput = document.getElementById('convert-to');

  // Validate number input after every entry
  numberInput.addEventListener('keyup', (e) => {
    let num = numberInput.value;
    convertFrom = convertFromInput.value;

    validateInput(num, convertFrom);
  });

  // Validate number input after convert from option change
  convertFromInput.addEventListener('change', () => {
    let num = numberInput.value;
    convertFrom = convertFromInput.value;

    validateInput(num, convertFrom);

    // Set the options for convert to when convert from changes
    setConvertToOptions(convertFrom);
  });

  // Button click event
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const numberToConvert = numberInput.value;
    const convertFrom = convertFromInput.value;
    const convertTo = convertToInput.value;

    console.log(numberToConvert, convertFrom, convertTo);
    // Make request
  });
});

// Show error message below convert
function showErrorMsg(msg) {
  let errorMsgDiv = document.getElementById('conversion-number-error');
  errorMsgDiv.innerText = msg;
  errorMsgDiv.style.display = 'block';
}

function hideErrorMsg() {
  let errorMsgDiv = document.getElementById('conversion-number-error');
  errorMsgDiv.innerText = '';
  errorMsgDiv.style.display = 'none';
}

function validateInput(num, convertFrom) {
  let validNo = true;
  let errorMsg = '';

  if (convertFrom === 'binary') {
    validNo = validateBinary(num);
    errorMsg = 'Binary numbers have only 1s and 0s';
  }

  if (convertFrom === 'octal') {
    validNo = validateOctal(num);
    errorMsg = 'Octal numbers are digits from 0 - 7';
  }

  if (convertFrom === 'decimal') {
    validNo = validateDecimal(num);
    errorMsg = 'Decimal numbers are digits from 0 - 9';
  }

  if (convertFrom === 'hex') {
    validNo = validateHexadecimal(num);
    errorMsg =
      'Hexadecimal numbers are digits from 0 - 9 and letters from A - F';
  }

  if (!validNo) {
    showErrorMsg(errorMsg);
    document.getElementById('convertBtn').disabled = true;
    return;
  }

  hideErrorMsg();
  document.getElementById('convertBtn').disabled = false;
}

function setConvertToOptions(convertFrom) {
  // Get convert to options
  let options = [
    { text: 'Binary', value: 'binary' },
    { text: 'Octal', value: 'octal' },
    { text: 'Decimal', value: 'decimal' },
    { text: 'Hexadecimal', value: 'hex' },
  ];

  let validOptions = options
    .filter((option) => option.value !== convertFrom)
    .map((option) => {
      return `
        <option value=${option.value}>${option.text}</option>
      `;
    })
    .join('');

  let convertToElement = document.getElementById('convert-to');
  convertToElement.innerHTML = validOptions;
}
