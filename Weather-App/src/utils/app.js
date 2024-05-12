const weatherApp = () => {
  // const apiKey = "YOUR_API_KEY";
  // const apiUrl;
  const locationElem = document.querySelector(".location");
  const temperatureElem = document.querySelector(".temperature");
  const descriptionElem = document.querySelector(".description");
  const input = document.querySelector(".inputElem");
  const btnSearch = document.querySelector(".btnSearch");

  btnSearch.addEventListener("click", () => {
    const input = inputElem.value;
    console.log(input);
  });
};
export default weatherApp;
