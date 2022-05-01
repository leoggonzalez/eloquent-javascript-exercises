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

/* Bean counting */
const beanInput1 = document.querySelector('#bean-input-1');
const beanResult1 = document.querySelector('#bean-result-1');

const charCounter = function (char) {
  return (text) => {
    let count = 0;
    for (index in text) {
      if (text[index] === char) count++;
    }
    return count;
  }
}

beanInput1.addEventListener('change', (e) => {
  const countBs = charCounter('B');

  beanResult1.innerHTML = countBs(e.target.value);
});

const beanInput2 = document.querySelector('#bean-input-2');
const beanInput3 = document.querySelector('#bean-input-3');
const beanResult2 = document.querySelector('#bean-result-2');

beanInput3.addEventListener('change', (e) => {
  if (beanInput2.value === '') {
    return beanResult2.innerHTML = 'Please add a character to count';
  }
  const countChar = charCounter(beanInput2.value);

  beanResult2.innerHTML = countChar(e.target.value);
})