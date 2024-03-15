const timeUpdate = () => {
  const futureTime = document.querySelector(".futureTime");

  function timer() {
    const current = new Date();
    let hours = current.getHours();
    const time = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = current.getMinutes().toString().padStart(2, 0);
    const seconds = current.getSeconds().toString().padStart(2, 0);
    const timeStamp = `${hours}:${minutes}:${seconds} ${time}`;
    futureTime.textContent = timeStamp;
  }
  timer();
  setInterval(timer, 1000);
};

export default timeUpdate;
