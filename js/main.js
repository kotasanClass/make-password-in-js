'use strict';

{
  const btn = document.getElementById('button');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 10000);

if (n < 9) {
  number.textContent = '000' + n;
} else if (n < 99) {
  number.textContent = '00' + n;
} else if (n < 999) {
  number.textContent = '0' + n;
} else {
  number.textContent = n;
}
   
  })
}