const calculator = () => {
  const paragraph = document.querySelector(".display");
  document.querySelector(".btn-container").addEventListener("click", (e) => {
    paragraph.append(e.target.textContent);
  });
};

export default calculator;
