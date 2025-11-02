const btnStart = document.querySelector(".btnStart");
const btnEnd = document.querySelector(".btnStop");
const container = document.querySelector(".container");

const images = [
  "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
];
btnStart.addEventListener("click", movePic);
// btnEnd.addEventListener("click", stopAnimation);

function movePic() {
  images.forEach((pic, i) => {
    setTimeout(() => {
      const image = document.createElement("img");
      image.src = pic;
      container.append(image);
    }, i * 2000);
  });
}

// function stopAnimation() {}
``;
