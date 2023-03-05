const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
// const bodycolor = document.querySelector('.body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function timer() {
  timerInterval = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function stop() {
  clearInterval(timerInterval);
}

startBtn.addEventListener('click', timer);
stopBtn.addEventListener('click', stop);
