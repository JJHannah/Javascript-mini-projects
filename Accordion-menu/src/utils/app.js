const menu = () => {
  const subtitles = document.querySelectorAll(".subtitle");
  const openSubtitles = document.querySelectorAll(".is-open");

  subtitles.forEach((subtitle) => {
    subtitle.addEventListener("click", () => {
      if (subtitle.classList.contains("is-open")) {
        subtitle.classList.remove("is-open");
      } else {
        openSubtitles.forEach((openTitle) => {
          openTitle.addEventListener('click',()=>{
            if(openTitle.classList.remove('is-open')){
              openTitle.classList.add('is-open')})
            }
          

        });
      }
    });
  });

  export default menu;
