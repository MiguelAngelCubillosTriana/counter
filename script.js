const counter = document.querySelector('#counter');
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');
const resetButton = document.querySelector('#reset');

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});