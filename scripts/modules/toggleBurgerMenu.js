"use strict";

function showMenu() {
  const burgerMenuWithSpace = document.querySelector(".burger-menu");

  burgerMenuWithSpace.classList.remove("hidden-element");
  burgerMenuWithSpace.classList.add("appeared-flex");
}

function hideMenu() {
  const burgerMenuWithSpace = document.querySelector(".burger-menu");

  burgerMenuWithSpace.classList.remove("appeared-flex");
  burgerMenuWithSpace.classList.add("hidden-element");
}

function toggleBurgerMenu() {
  const burgerMenuWithSpace = document.querySelector(".burger-menu");
  const btnOpenMenu = document.querySelector(".header__burger-menu-btn");
  const btnCloseMenu = document.querySelector(".burger-menu__close-btn");

  btnOpenMenu.addEventListener("click", showMenu);

  btnCloseMenu.addEventListener("click", hideMenu);

  // Event while clicking on light space from the right of the menu
  burgerMenuWithSpace.addEventListener("click", (event) => {
    if (event.target === burgerMenuWithSpace) {
      hideMenu();
    }
  });
}

export default toggleBurgerMenu;
