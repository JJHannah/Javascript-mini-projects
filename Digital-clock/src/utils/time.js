const timeUpdate = () => {
  const futureTime = document.querySelector(".futureTime");

  function timer() {
    const currentDate = new Date();
    const timestap = currentDate.getHours();
    futureTime.textContent = timestap;
  }
  timer();
};

export default timeUpdate;
