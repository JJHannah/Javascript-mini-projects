const weatherApp = () => {
  // const apiKey = "YOUR_API_KEY";
  // const apiUrl;
  const locationElem = document.querySelector(".location");
  const temperatureElem = document.querySelector(".temperature");
  const descriptionElem = document.querySelector(".description");
  const input = document.querySelector(".inputElem");
  const btnSearch = document.querySelector(".btnSearch");

  btnSearch.addEventListener("click", () => {
    const weatherSearch = inputElem.value;
    console.log(weatherSearch);

    if (weatherSearch) {
      weather(weatherSearch);
    }
  });
};
export default weatherApp;
