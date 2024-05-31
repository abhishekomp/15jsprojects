// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const sidebarToggleEl = document.querySelector(".sidebar-toggle");
const sidebarEl = document.querySelector(".sidebar");
const closeBtnEl = document.querySelector(".close-btn");

sidebarToggleEl.addEventListener("click", function () {
  console.log(sidebarEl.classList);
  // console.log(sidebarEl.classList.contains("show-sidebar"));
  // if (sidebarEl.classList.contains("show-sidebar")) {
  //   sidebarEl.classList.remove("show-sidebar");
  // } else {
  //   sidebarEl.classList.add("show-sidebar");
  // }
  sidebarEl.classList.toggle("show-sidebar");
});

closeBtnEl.addEventListener('click', function(){
  sidebarEl.classList.remove("show-sidebar");
});
