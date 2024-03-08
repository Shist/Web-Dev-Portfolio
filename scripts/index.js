"use strict";

import toggleBurgerMenu from "./modules/toggleBurgerMenu.js";
import formSubmit from "./modules/formSubmit.js";
import fibonacci from "./modules/fibonacci.js";

document.addEventListener("DOMContentLoaded", () => {
  toggleBurgerMenu();
  formSubmit();

  for (let n = 1; n <= 10; n++) {
    console.log(`fibonacci(${n}) = ${fibonacci(n)}`);
  }
});
