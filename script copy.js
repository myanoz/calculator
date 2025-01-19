const display = document.querySelector('#value');
const buttons = document.querySelectorAll('button');
const numButtons = document.querySelectorAll('.num-btn');
const clearButton = document.querySelector('#clear-btn');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');

let currentValue = '';
let value1 = 0;
let value2 = 0;
let operator = '';
let isEqualsOutput = false;

display.innerHTML = '0';

function handleNumberInput(num) {
  if (isEqualsOutput) {
    currentValue = '';
    isEqualsOutput = !isEqualsOutput;
    if (num === '0') clear();
  }
  //초깃값 0일때 0입력 방지
  if (currentValue === '' && num === '0') return;
  currentValue += num;
  display.innerHTML = currentValue;
}

function handleOperatorInput(oper) {
  if (operator !== '') {
  }
  operator = oper;
  value1 = Number(currentValue);
  currentValue = '';
}

function handleEqualsInput() {
  value2 = Number(currentValue);
  switch (operator) {
    case 'PLUS':
      currentValue = value1 + value2;
      break;
    case 'MINUS':
      currentValue = value1 - value2;
      break;
    case 'MULTIPLY':
      currentValue = value1 * value2;
      break;
    case 'DIVIDE':
      currentValue = value1 / value2;
      break;
  }
  display.innerHTML = currentValue;
  value1 = 0;
  value2 = 0;
  operator = '';
  isEqualsOutput = !isEqualsOutput;
}

function handleClearInput() {
  clear();
}

function clear() {
  currentValue = '';
  value1 = 0;
  value2 = 0;
  operator = '';
  display.innerHTML = '0';
}

// 각 버튼에 이벤트 리스너 등록

numButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const inputNumber = btn.innerHTML.trim();
    handleNumberInput(inputNumber);
  });
});

plusButton.addEventListener('click', () => {
  handleOperatorInput('PLUS');
});

minusButton.addEventListener('click', () => {
  handleOperatorInput('MINUS');
});

multiplyButton.addEventListener('click', () => {
  handleOperatorInput('MULTIPLY');
});

divideButton.addEventListener('click', () => {
  handleOperatorInput('DIVIDE');
});

equalsButton.addEventListener('click', handleEqualsInput);

clearButton.addEventListener('click', handleClearInput);
