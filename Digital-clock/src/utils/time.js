const timeUpdate = () => {
  const futureTime = document.querySelector(".futureTime");

  function timer() {
    const current = new Date();
    const hours = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();
    const timestap = `${hours}:${minutes}:${seconds}`;
    futureTime.textContent = timestap;
  }
  timer();
  setInterval(timer, 1000);
};

export default timeUpdate;
