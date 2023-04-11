let result = document.getElementById("result");
let clearButton = document.getElementById("button-clear");
let equalsButton = document.getElementById("button-equals");
let decimalButton = document.getElementById("button-decimal");

let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");

let currentNumber = "";
let currentOperator = null;
let resultNumber = null;

function handleNumberButtonClick(number) {
  currentNumber += number;
  result.innerHTML = currentNumber;
}

function handleOperatorButtonClick(operator) {
  if (currentOperator !== null) {
    handleEqualsButtonClick();
  }
  currentOperator = operator;
  resultNumber = Number(currentNumber);
  currentNumber = "";
}

function handleEqualsButtonClick() {
  if (currentOperator === null) {
    return;
  }
  let newNumber = Number(currentNumber);
  let calculation;
  switch (currentOperator) {
    case "+":
      calculation = resultNumber + newNumber;
      break;
    case "-":
      calculation = resultNumber - newNumber;
      break;
    case "×":
      calculation = resultNumber * newNumber;
      break;
    case "÷":
      calculation = resultNumber / newNumber;
      break;
    default:
      return;
  }
  currentNumber = calculation.toString();
  resultNumber = null;
  currentOperator = null;
  result.innerHTML = currentNumber;
}

function handleClearButtonClick() {
  currentNumber = "";
  currentOperator = null;
  resultNumber = null;
  result.innerHTML = "0";
}

function handleDecimalButtonClick() {
  if (currentNumber === "") {
    currentNumber = "0";
  }
  if (currentNumber.indexOf(".") === -1) {
    currentNumber += ".";
    result.innerHTML = currentNumber;
  }
}

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleNumberButtonClick(button.innerHTML);
  });
});

operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleOperatorButtonClick(button.innerHTML);
  });
});

equalsButton.addEventListener("click", handleEqualsButtonClick);
clearButton.addEventListener("click", handleClearButtonClick);
decimalButton.addEventListener("click", handleDecimalButtonClick);
