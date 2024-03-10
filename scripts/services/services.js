"use strict";

async function postData(url, data) {
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await result.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export { postData };
