const timer = () => {
  const displayNum = document.querySelector(".displayNum");
  const btnStart = document.querySelector(".btnStart");
  const btnStop = document.querySelector(".btnStop");
  const btnReset = document.querySelector(".btnReset");

  btnStart.addEventListener("click", start);
  btnStop.addEventListener("click", stop);
  btnReset.addEventListener("click", reset);

  function start() {}
  function stop() {}
  function reset() {}
};

export default timer;
