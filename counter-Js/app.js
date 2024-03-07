const increaseBtn = document.querySelector(".increaseBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");
const resetBtn = document.querySelector(".resetBtn");
const label = document.querySelector(".labelText");

increaseBtn.addEventListener("click", incrementBtn);
decreaseBtn.addEventListener("click", decrementBtn);
resetBtn.addEventListener("click", reset);

function incrementBtn() {
  count++;
  label.textContent = count;
}
function decrementBtn() {
  count--;
  label.textContent = count;
}
function reset() {
  count = 0;
  label.textContent = count;
}
