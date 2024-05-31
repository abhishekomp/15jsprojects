// using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
  const questionBtn = question.querySelector('.question-btn');
  console.log(questionBtn);
  questionBtn.addEventListener("click", function(){

    // closing already open question
    questions.forEach(function(item){
      if(item !== question){
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
    console.log("toggling class 'show-text'")
  });
});


// traversing the dom
// const questionBtnsEl = document.querySelectorAll(".question-btn");

// questionBtnsEl.forEach(function(btn){
//   btn.addEventListener("click", function (e){
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
