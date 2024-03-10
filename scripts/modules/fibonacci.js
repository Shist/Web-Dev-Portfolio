"use strict";

function fibonacci(n) {
  if (n <= 0) {
    return "error";
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let firstNum = 0;
    let secondNum = 1;
    let newSum = null;

    for (let i = 3; i <= n; i++) {
      newSum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = newSum;
    }

    return secondNum;
  }
}

export default fibonacci;
