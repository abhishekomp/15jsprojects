let count = 0;
let valueEl = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const btnClasses = e.currentTarget.classList;
    if(btnClasses.contains("decrease")){
      count--;
    }
    else if(btnClasses.contains("increase")){
      count++;
    } else {
      count = 0;
    }
    if(count > 0){
      valueEl.style.color = "green";
    }
    if(count < 0){
      valueEl.style.color = "red";
    }
    if(count === 0){
      valueEl.style.color = "#222";
    }
    valueEl.textContent = count;
  })
})

/* const btnDecrease = document.querySelector(".decrease");
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
}); */
