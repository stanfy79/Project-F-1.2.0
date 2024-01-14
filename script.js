
const showPassword = document.getElementById("show-pass-btn");
const passwordField = document.getElementById("user-input-2");

showPassword.addEventListener("click", () => {
  
  if (showPassword.textContent === "show") {
    passwordField.type = "text";
    showPassword.textContent = "hide";  
  } else {
    passwordField.type = "password";
    showPassword.textContent = "show";
  }
  
})