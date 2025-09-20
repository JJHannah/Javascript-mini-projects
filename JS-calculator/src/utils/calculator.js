const calculation = () => {
  const paragraph = document.querySelector(".display");
  document.querySelector(".btn-container").addEventListener("click", (e) => {
    paragraph.append(e.target.textContent);
  });
};

export default calculation;

// {
//   if (e.target.nodeName === "BUTTON") {
//     paragraph.append(e.target.textContent);
//   // }
