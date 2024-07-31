let valueEl = document.querySelector("#value");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnIncrease = document.querySelector(".increase");

btnDecrease.addEventListener('click', function() {
  valueEl.textContent--;
  if(valueEl.textContent < 0){
    valueEl.style.color = "red";
  }
});

btnReset.addEventListener('click', function() {
  valueEl.textContent = 0;
});

btnIncrease.addEventListener('click', function() {
  valueEl.textContent++;
});
