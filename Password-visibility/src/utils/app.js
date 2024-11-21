export default function password() {
  const passElement = document.querySelector(".password");
  const username = document.querySelector(".username");
  const icon = document.querySelector(".fa-eye");
  const toggleIcon = document.querySelector(".toggle");

  toggleIcon.addEventListener("click", iconChange);

  function iconChange() {
    if (icon.classList.contains("fa-eye")) {
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  }
}
