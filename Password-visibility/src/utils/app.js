function password() {
  const passElement = document.querySelector(".password");
  const username = document.querySelector(".username");
  const icon = document.querySelector(".fa-eye");
  const toggleIcon = document.querySelector(".toggle");

  toggleIcon.addEventListener("click", passVisible);

  function iconChange() {
    if (icon.classList.contains("fa-eye")) {
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  }
}

function passVisible() {
  const passElement = document.querySelector(".password");
  if (passElement.type === "password") {
    passElement.type === "text";
    console.log(passElement.type);
  } else {
    passElement.type = "password";
  }
}
passVisible();
export default password;
