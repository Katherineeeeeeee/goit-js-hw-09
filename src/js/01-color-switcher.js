const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');


let timerId = null;



btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

