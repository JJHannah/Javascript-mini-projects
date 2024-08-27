const toggle = () => {
  const toggleBtn = document.querySelector(".toggleBtn");

  const toggleTheme = () => {
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-mode");
    } else {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-mode");
    }
  };

  const enabledTheme = () => {
    const appliedTheme = localStorage.getItem("theme");
    if (appliedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };
  toggleBtn.addEventListener("click", toggleTheme);
  enabledTheme();
};

export default toggle;
