"use strict";

import { postData } from "../services/services.js";

async function sendRequest(name, mail, message) {
  const response = await postData(
    "http://localhost:3000/requests",
    JSON.stringify({
      name,
      mail,
      message,
    })
  );
  return response;
}

export default sendRequest;
