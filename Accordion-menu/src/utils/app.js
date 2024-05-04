const menu = () => {
  const subtitles = document.querySelectorAll(".subtitle");
  const openSubtitles = document.querySelectorAll(".is-open");

  subtitles.forEach((subtitle) => {
    subtitle.addEventListener("click", () => {
      subtitle.classList.toggle("is-open");
    });
  });
  function removeOpenSubtitle() {
    openSubtitles.forEach((openSubtitle) => {
      openSubtitle.classList.remove("is-open");
    });
  }
  removeOpenSubtitle();
};

export default menu;
