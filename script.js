let [hours, minutes, seconds] = [0, 0, 0],
  timerInterval,
  isRunning = false;
const display = document.querySelector("h1"),
  laps = document.getElementById("laps");

const updateDisplay = () =>
  (display.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);

document.getElementById("start-btn").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      seconds = (seconds + 1) % 60;
      if (!seconds) minutes = (minutes + 1) % 60;
      if (!minutes && !seconds) hours++;
      updateDisplay();
    }, 1000);
  }
});

document
  .getElementById("stop-btn")
  .addEventListener(
    "click",
    () => clearInterval(timerInterval) || (isRunning = false)
  );

document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(timerInterval);
  [hours, minutes, seconds] = [0, 0, 0];
  laps.innerHTML = "";
  isRunning = false;
  updateDisplay();
});

document
  .getElementById("lap-btn")
  .addEventListener("click", () =>
    laps.appendChild(
      Object.assign(document.createElement("li"), {
        textContent: display.textContent,
      })
    )
  );
