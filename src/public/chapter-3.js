const first = document.querySelector("#first");
const second = document.querySelector("#second");
const result = document.querySelector("#result");

const min = function (a, b) {
  const first = Number(a || 0);
  const second = Number(b || 0);

  if (first > second) return second;
  return first;
}

const print = function (value) {
  result.innerHTML = value;
}

first.addEventListener('change', (e) => {
  print(min(e.target.value, second.value));
})

second.addEventListener('change', (e) => {
  print(min(e.target.value, first.value));
})

/* Recursion */
const isEven = function (value) {
  const absoluteValue = Math.abs(value);

  if (absoluteValue === 0) return true;
  if (absoluteValue === 1) return false;

  return isEven(absoluteValue - 2);
}

const recursionInput = document.querySelector('#recursion-input');
const recursionResult = document.querySelector('#recursion-result');

recursionInput.addEventListener('change', (e) => {
  recursionResult.innerHTML = isEven(Number(e.target.value || 0)) ? 'Number is even.' : 'Number is odd.';
})