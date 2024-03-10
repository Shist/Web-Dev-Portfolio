"use strict";

import validateForm from "./validateForm.js";
import sendRequest from "./sendRequest.js";

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
  const submitBtn = document.querySelector(
    ".contacts-section__contact-form-submit-btn"
  );
  const msgWrapper = document.querySelector(".contacts-section__msg-wrapper");
  const inputName = document.querySelector("#contact-name");
  const inputEmail = document.querySelector("#contact-email");
  const inputMsg = document.querySelector("#contact-msg");

  submitBtn.disabled = true;
  msgWrapper.innerHTML = "";
  msgWrapper.insertAdjacentHTML("afterbegin", '<div class="spinner"></div>');

  sendRequest(inputName.value, inputEmail.value, inputMsg.value)
    .then(() => {
      form.reset();
      msgWrapper.insertAdjacentHTML(
        "afterbegin",
        '<div class="success-msg">Ваши данные успешно отправлены!</div>'
      );
    })
    .catch((error) => {
      const errorMsg = `Ошибка во время отправки данных. ${error}`;
      msgWrapper.insertAdjacentHTML(
        "afterbegin",
        `<div class="fail-msg">${errorMsg}</div>`
      );
    })
    .finally(() => {
      msgWrapper.querySelector(".spinner").remove();
      submitBtn.disabled = false;
    });
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
