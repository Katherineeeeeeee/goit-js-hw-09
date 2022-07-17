import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitEl = event => {
  event.preventDefolt();

  const delayEl = Number(delay.value);
  const stepEl = Number(step.value);
  const amountEl = Number(amount.value);

  for (let i = 0; i < amountEl; i += 1) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })

      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  event.currentTarget.reset();
};


formEl.addEventListener('submit', submitEl);

