"use strict";

function addErrorToInput(input, inputWrapper, errorMsg) {
  input.classList.add("error-field");
  inputWrapper.dataset["errorMsg"] = errorMsg;
  inputWrapper.classList.add("error-field-wrapper");
}

function removeErrorFromInput(input, inputWrapper) {
  input.classList.remove("error-field");
  inputWrapper.dataset["errorMsg"] = "No errors";
  inputWrapper.classList.remove("error-field-wrapper");
}

function validateName() {
  const inputNameWrapper = document.querySelector("#contact-name-wrapper");
  const inputName = document.querySelector("#contact-name");

  if (!inputName.value) {
    addErrorToInput(inputName, inputNameWrapper, "Укажите имя");
    return false;
  } else if (inputName.value.length > 32) {
    addErrorToInput(inputName, inputNameWrapper, "Максимум 32 символа");
    return false;
  } else {
    removeErrorFromInput(inputName, inputNameWrapper);
    return true;
  }
}

function validateEmail() {
  const inputEmailWrapper = document.querySelector("#contact-email-wrapper");
  const inputEmail = document.querySelector("#contact-email");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!inputEmail.value) {
    addErrorToInput(inputEmail, inputEmailWrapper, "Укажите почту");
    return false;
  } else if (!emailRegex.test(inputEmail.value)) {
    addErrorToInput(inputEmail, inputEmailWrapper, "Некорректная почта");
    return false;
  } else {
    removeErrorFromInput(inputEmail, inputEmailWrapper);
    return true;
  }
}

function validateMsg() {
  const inputMsgWrapper = document.querySelector("#contact-msg-wrapper");
  const inputMsg = document.querySelector("#contact-msg");

  if (!inputMsg.value) {
    addErrorToInput(inputMsg, inputMsgWrapper, "Укажите сообщение");
    return false;
  } else if (inputMsg.value.length > 1000) {
    addErrorToInput(inputMsg, inputMsgWrapper, "Максимум 1000 символов");
    return false;
  } else {
    removeErrorFromInput(inputMsg, inputMsgWrapper);
    return true;
  }
}

function validateForm() {
  const nameIsOk = validateName();
  const emailIsOk = validateEmail();
  const msgIsOk = validateMsg();

  return nameIsOk && emailIsOk && msgIsOk;
}

function formSubmit() {
  const form = document.querySelector(".contacts-section__contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      form.reset();
      window.alert("Success!");
    }
  });
}

export default formSubmit;
