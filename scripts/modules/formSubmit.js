"use strict";

import validateForm from "./validateForm.js";

function showModalWindow(modalSelector) {
  const modalWindow = document.querySelector(modalSelector);

  modalWindow.classList.remove("hidden-element");
  modalWindow.classList.add("appeared-flex");
}

function hideModalWindow(modalSelector) {
  const modalWindow = document.querySelector(modalSelector);

  modalWindow.classList.remove("appeared-flex");
  modalWindow.classList.add("hidden-element");
}

function setModalListeners() {
  const modalPrivacyPolicy = document.querySelector("#modal-privacy-policy");
  const btnCloseModalPolicy = document.querySelector(
    "#modal-privacy-policy-close-btn"
  );
  const btnDisagreePolicy = document.querySelector(
    "#modal-privacy-policy-cancel-btn"
  );

  btnCloseModalPolicy.addEventListener("click", () =>
    hideModalWindow("#modal-privacy-policy")
  );

  btnDisagreePolicy.addEventListener("click", () =>
    hideModalWindow("#modal-privacy-policy")
  );

  // Event while clicking on dark space around modal window
  modalPrivacyPolicy.addEventListener("click", (event) => {
    if (event.target === modalPrivacyPolicy) {
      hideModalWindow("#modal-privacy-policy");
    }
  });
}

function sendData() {
  const form = document.querySelector(".contacts-section__contact-form");

  form.reset();
  window.alert("Success!");
}

function formSubmit() {
  const form = document.querySelector(".contacts-section__contact-form");
  const checkboxPolicy = document.querySelector("#policy-agreement");
  const btnAgreePolicy = document.querySelector(
    "#modal-privacy-policy-agree-btn"
  );

  setModalListeners();

  btnAgreePolicy.addEventListener("click", () => {
    hideModalWindow("#modal-privacy-policy");
    sendData();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      if (checkboxPolicy.checked) {
        sendData();
      } else {
        showModalWindow("#modal-privacy-policy");
      }
    }
  });
}

export default formSubmit;
