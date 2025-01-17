const display = document.querySelector('#value');
const buttons = document.querySelectorAll('button');
const numButtons = document.querySelectorAll('.num-btn');
const clearButton = document.querySelector('#clear-btn');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
let value = '';
let value2 = 0;
let log = '';
let operator = '';

display.innerHTML = '0';

function handleNumberInput(num) {
  const lastInput = log.slice(-1);
  if (lastInput === '' || typeof Number(lastInput) === 'number') {
    console.log(num);
    log += num;
    value += num;
    display.innerHTML = value;
  } else {
    console.log('+');
    log += num;
    value2 += num;
    display.innerHTML = value2;
  }
}

function handleOperatorInput(operator) {
  switch (operator) {
    case 'plus':
      log += '+';
  }
}

function handleEqualsInput() {
  display.innerHTML = Number(value) + Number(value2);
  log = '';
}

function handleClearInput() {
  log = '';
  value = '';
  value2 = '';
  display.innerHTML = '0';
}

numButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    handleNumberInput(btn.innerHTML.trim());
  });
});

plusButton.addEventListener('click', () => {
  handleOperatorInput('plus');
});

minusButton.addEventListener('click', () => {});

multiplyButton.addEventListener('click', () => {});

divideButton.addEventListener('click', () => {});

equalsButton.addEventListener('click', () => {
  handleEqualsInput;
});

clearButton.addEventListener('click', handleClearInput);

//경우를 나눌때 맨처음에 그냥 모든버튼.forEach 안에서 다 해결하자

let n = 1;
n.push(2);
console.log(n);
