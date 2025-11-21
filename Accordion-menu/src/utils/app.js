const menu = () => {
  const subtitles = document.querySelectorAll(".subtitle");
  const openSubtitles = document.querySelectorAll(".is-open");

  subtitles.forEach((subtitle) => {
    subtitle.addEventListener("click", () => {
      subtitle.classList.toggle("is-open");
    });
  });
};

export default menu;
