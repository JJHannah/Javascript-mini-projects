const timeUpdate = () => {
  const futureTime = document.querySelector(".futureTime");

  function timer() {
    const currentDate = new Date();
    const timestap = currentDate.getTime();
    futureTime.textContent = timestap;
  }
  timer();
};

export default timeUpdate;
