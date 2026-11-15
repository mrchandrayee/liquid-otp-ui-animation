const inputs = [...document.querySelectorAll(".otp-input")];
const form = document.getElementById("otpForm");
const button = document.getElementById("submitButton");
const message = document.getElementById("message");
const successIcon = document.getElementById("successIcon");
const errorIcon = document.getElementById("errorIcon");
const blobs = [...document.querySelectorAll(".blob")];

function clearStatus() {
  successIcon.classList.remove("show");
  errorIcon.classList.remove("show");
  message.textContent = "";
  message.className = "message";
  button.classList.remove("failed", "success");
  button.textContent = "Confirm Identity";
}

function updateLiquid() {
  inputs.forEach((input, index) => {
    const filled = input.value.length > 0;
    input.classList.toggle("filled", filled);
    blobs[index].classList.toggle("active", filled || document.activeElement === input);
    blobs[index].style.left = `calc(${index} * (100% / 6))`;
  });
}

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const digit = input.value.replace(/\D/g, "").slice(-1);
    input.value = digit;
    clearStatus();
    if (digit && index < inputs.length - 1) inputs[index + 1].focus();
    updateLiquid();
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].value = "";
      inputs[index - 1].focus();
      updateLiquid();
    }
    if (event.key === "ArrowLeft" && index > 0) inputs[index - 1].focus();
    if (event.key === "ArrowRight" && index < inputs.length - 1) inputs[index + 1].focus();
  });

  input.addEventListener("focus", updateLiquid);
  input.addEventListener("blur", updateLiquid);
});

inputs[0].addEventListener("paste", (event) => {
  const pasted = (event.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "").slice(0, 6);
  if (!pasted) return;
  event.preventDefault();
  pasted.split("").forEach((digit, index) => { inputs[index].value = digit; });
  inputs[Math.min(pasted.length, 5)].focus();
  clearStatus();
  updateLiquid();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = inputs.map(input => input.value).join("");
  if (code.length !== 6) {
    message.textContent = "Please enter all 6 digits.";
    message.className = "message error";
    inputs.find(input => !input.value)?.focus();
    return;
  }

  clearStatus();
  button.disabled = true;
  button.textContent = "Processing...";
  inputs.forEach(input => input.disabled = true);

  window.setTimeout(() => {
    button.disabled = false;
    inputs.forEach(input => input.disabled = false);

    if (code === "123456") {
      successIcon.classList.add("show");
      message.textContent = "Identity verified successfully!";
      message.className = "message success";
      button.textContent = "Verified Successfully";
      button.classList.add("success");
    } else {
      errorIcon.classList.add("show");
      message.textContent = "Incorrect code. Please try again.";
      message.className = "message error";
      button.textContent = "Verification Failed";
      button.classList.add("failed");
      inputs.forEach(input => input.value = "");
      inputs[0].focus();
      updateLiquid();
    }
  }, 1300);
});

updateLiquid();
