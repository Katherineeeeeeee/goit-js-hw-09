import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datetime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const mainTimer = document.querySelector('.timer');

const timer = {
  intervalId: null,
  datetime: null,

  start() {

    this.intervalId = setInterval(() => {
      const now = Date.now();
      const diff = this.datetime - now;

      if (diff <= 0) {
        this.stop();

        return;
      }

      const { days, hours, minutes, seconds } = convertMs(diff);
      document.querySelector('[data-days]').textContent = this.pad(days);
      document.querySelector('[data-hours]').textContent = this.pad(hours);
      document.querySelector('[data-minutes]').textContent = this.pad(minutes);
      document.querySelector('[data-seconds]').textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  pad(value) {
    if (value.toString().length > 2) {
      return value;
    }
    return String(value).padStart(2, 0);
  },
};

flatpickr(datetime, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      timer.datetime = selectedDates[0];

    //   Notiflix.Notify.success('Correct!');

      //btnStart must be active
      btnStart.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future"');

      //btnStart must be unactive
      btnStart.disabled = true;
    }
    console.log(selectedDates[0]);
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

btnStart.addEventListener('click', timer.start.bind(timer));
