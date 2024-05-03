const menu = () => {
  const subtitles = document.querySelectorAll(".subtitle");

  subtitles.forEach((subtitle) => {
    subtitle.addEventListener("click", () => {
      if (subtitle.classList.contains("is-open")) {
        subtitle.classList.remove("is-open");
      } else {
        const openSubtitles = document.querySelectorAll(".is-open");
        openSubtitles.forEach((openSubtitles) => {
          openSubtitles.classList.remove("is-open");
        });
        openSubtitles.classList.add("is-open");
      }
    });
  });
};

export default menu;
