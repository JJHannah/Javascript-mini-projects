const weatherApp = () => {
  const locationElem = document.querySelector(".location");
  const temperatureElem = document.querySelector(".temperature");
  const descriptionElem = document.querySelector(".description");
  const inputElem = document.querySelector(".inputElem");
  const btnSearch = document.querySelector(".btnSearch");
  // const apiKey = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputElem}&appid=${apiKey}&units=metric`;

  btnSearch.addEventListener("click", fetchData);

  async function fetchData() {
    try {
      const weatherSearch = inputElem.value.toLowerCase();
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("location not found");
      } else {
        const data = await response.json();
      }

      return weatherSearch.json();
      locationElem.append;
    } catch (error) {
      console.log(error);
    }
  }
};

export default weatherApp;
