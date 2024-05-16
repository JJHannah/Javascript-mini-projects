const weatherApp = () => {
  // const apiKey = "YOUR_API_KEY";
  // const apiUrl;
  const locationElem = document.querySelector(".location");
  const temperatureElem = document.querySelector(".temperature");
  const descriptionElem = document.querySelector(".description");
  const inputElem = document.querySelector(".inputElem");
  const btnSearch = document.querySelector(".btnSearch");
  // // const apiKey = "";
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputElem}&appid=${apiKey}&units=metric`;

  btnSearch.addEventListener("click", fetchData);

  async function fetchData() {
    try {
      const weatherSearch = inputElem.value.toLowerCase();
      console.log(weatherSearch);

      if (!weatherSearch.ok) {
        throw new Error("location not found");
      }

      return weatherSearch.json();
    } catch (error) {
      console.log(error);
    }
  }
};

export default weatherApp;
