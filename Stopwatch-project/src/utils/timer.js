const timer = () => {
  const displayNum = document.querySelector(".displayNum");
  const btnStart = document.querySelector(".btnStart");
  const btnStop = document.querySelector(".btnStop");
  const btnReset = document.querySelector(".btnReset");

  btnStart.addEventListener("click", startWatch);
  btnStop.addEventListener("click", stopWatch);
  btnReset.addEventListener("click", resetWatch);

  let startTime;
  let stopWatchInterval;
  let elapsedPausedTime = 0;

  function startWatch() {
    if (!stopWatchInterval) {
      startTime = new Date().getTime() - elapsedTime;
      stopWatchInterval = setInterval(updateStopwatch, 1000);
    }
  }
  function stopWatch() {
    clearInterval(stopWatchInterval);
    elapsedPausedTime = new Date().getTime() - startTime;
    stopWatchInterval = null;
  }
  function resetWatch() {
    stopWatch();
    elapsedPausedTime = 0;
    displayNum.innerHTML = "00:00:00";
  }
};

export default timer;
