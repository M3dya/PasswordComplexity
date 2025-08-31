/*
  Developer: Fatemeh Asgharian
  Purpose: Password Complexity Demo
*/

const MIN_LENGTH = 10;
// Location of the icons
const successImgPath = "./assets/images/success.png";
const errorImgPath = "./assets/images/error.png";
// Message text used by the app
const appMessages = {
  lengthCheckTextId: {
    errorText: "Password must contain at least 10 chars",
    successText: "Password has at least 10 chars",
  },

  numberCheckTextId: {
    errorText: "Password must contain at least 1 number",
    successText: "Password has at least 1 number",
  },

  caseCheckTextId: {
    errorText: "Password must contain at least 1 uppercase text",
    successText: "Password has at least 1 uppercase text",
  },

  specialCharCheckTextId: {
    errorText: "Password must contain at least 1 special chars ~!@#$%^&*()_+",
    successText: "Password has at least 1 special chars ~!@#$%^&*()_+",
  },
};

// Set the default values, look of the element with a particular id and set the message based on the same id
// Update id to lengthCheckTextId
document.getElementById("lengthCheckTextId").innerText =
  appMessages["lengthCheckTextId"].errorText;

// Update id to numberCheckTextId
document.getElementById("numberCheckTextId").innerText =
  appMessages["numberCheckTextId"].errorText;

// Update id to caseCheckTextId
document.getElementById("caseCheckTextId").innerText =
  appMessages["caseCheckTextId"].errorText;

// Update id to specialCharCheckTextId
document.getElementById("specialCharCheckTextId").innerText =
  appMessages["specialCharCheckTextId"].errorText;

function addListeners() {
  // Look for the element passwordToProcess and add an input listener to this
  // Update id to passwordToProcess
  // Update eventType to input
  document
    .getElementById("passwordToProcess")
    .addEventListener("input", (event) => {
      lengthCheck(
        event.target.value,
        "lengthCheckIndicatorId",
        "lengthCheckTextId"
      );
      numberCheck(
        event.target.value,
        "numberCheckIndicatorId",
        "numberCheckTextId"
      );
      caseCheck(event.target.value, "caseCheckIndicatorId", "caseCheckTextId");
      specialCharCheck(
        event.target.value,
        "specialCharCheckIndicatorId",
        "specialCharCheckTextId"
      );
    });
}

function lengthCheck(value, indicatorId, textId) {
  // Set elementIndicator to document.getElementById(indicatorId)
  const elementIndicator = document.getElementById(indicatorId);
  // Set elementText to document.getElementById(textId)
  const elementText = document.getElementById(textId);

  if (value.length >= MIN_LENGTH) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function numberCheck(value, indicatorId, textId) {
  // Set elementIndicator to document.getElementById(indicatorId)
  const elementIndicator = document.getElementById(indicatorId);
  // Set elementText to document.getElementById(textId)
  const elementText = document.getElementById(textId);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // Check if the char is a digit
  const regex = /\d/;

  if (regex.test(value)) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function caseCheck(value, indicatorId, textId) {
  // Set elementIndicator to document.getElementById(indicatorId)
  const elementIndicator = document.getElementById(indicatorId);
  // Set elementText to document.getElementById(textId)
  const elementText = document.getElementById(textId);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // Check if the char is uppercase
  const regex = /[A-Z]/;

  if (regex.test(value)) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function specialCharCheck(value, indicatorId, textId) {
  // Set elementIndicator to document.getElementById(indicatorId)
  const elementIndicator = document.getElementById(indicatorId);
  // Set elementText to document.getElementById(textId)
  const elementText = document.getElementById(textId);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // Check if the char matches one of chars on the character class
  const regex = /[~!@#$%^&*()_+]/;

  if (regex.test(value)) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function setElementValues(isSuccess, elementIndicator, elementText, textId) {
  if (isSuccess) {
    elementIndicator.src = successImgPath;
    elementText.innerText = appMessages[textId].successText;
    elementText.className = "";
  } else {
    elementIndicator.src = errorImgPath;
    elementText.innerText = appMessages[textId].errorText;
    elementText.className = "errorState";
  }
}

addListeners();
