const weatherApp = () => {
  // const apiKey = "YOUR_API_KEY";
  // const apiUrl;
  const locationElem = document.querySelector(".location");
  const temperatureElem = document.querySelector(".temperature");
  const descriptionElem = document.querySelector(".description");
  const inputElem = document.querySelector(".inputElem");
  const btnSearch = document.querySelector(".btnSearch");
  const apikey = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputElem}&appid=${apiKey}&units=metric`;

  btnSearch.addEventListener("click", () => {
    const weatherSearch = inputElem.value;
    console.log(weatherSearch);
  });
};
export default weatherApp;
