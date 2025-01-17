const display = document.querySelector("#value");
const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".num-btn");
const clearButton = document.querySelector("#clear-btn");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");
let value = 0;
let value2 = 0;
let operator = "";

display.innerHTML = "0";

numButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //숫자 버튼을 클릭했을 때
    if (display.innerHTML.trim() === "0") {
      //기존에 표시된 값이 0일 때
      if (btn.innerHTML.trim() === "0") {
        //클릭한 숫자가 0일 때
        return; //입력을 받지 않음
      } else {
        //클릭한 숫자가 0이 아닐 때
        display.innerHTML = ""; //앞의 0을 없애고 밑에서 숫자를 할당받을 것임
      }
    } else if (isNaN(display.innerHTML.trim())) {
      //기존에 표시된 값이 숫자가 아니고 연산기호일 때
      display.innerHTML = "";
    }
    display.innerHTML += btn.innerHTML.trim();
  });
});

plusButton.addEventListener("click", () => {
  operator = "plus";
  value = Number(display.innerHTML.trim());
  display.innerHTML = "+";
});

minusButton.addEventListener("click", () => {
  display.innerHTML = "0";
});

multiplyButton.addEventListener("click", () => {
  display.innerHTML = "0";
});

divideButton.addEventListener("click", () => {
  display.innerHTML = "0";
});

equalsButton.addEventListener("click", () => {
  value2 = Number(display.innerHTML.trim());
  if (operator === "plus") {
    display.innerHTML = value + value2;
  }
});

clearButton.addEventListener("click", () => {
  display.innerHTML = "0";
});

//경우를 나눌때 맨처음에 그냥 모든버튼.forEach 안에서 다 해결하자
