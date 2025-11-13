const passwordInput = document.querySelector("#password");
const eyeClick = document.querySelector(".eye");
const eyeChange = document.getElementById("eyes");

eyeClick.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});
