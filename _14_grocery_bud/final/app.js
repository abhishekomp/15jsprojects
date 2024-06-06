// ****** select items **********
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector(".grocery-form");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//edit options
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//form submit
form.addEventListener("submit", addItem);
//clear items
clearBtn.addEventListener('click', clearItems);

//load items from storage when page is loaded freshly.
window.addEventListener('DOMContentLoaded', setUpItems);

// we do not have access to this button at this time.
// const deletBtn = document.querySelector('.delete-btn');
// console.log(deletBtn);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  //when adding a new item
  if (value && !editFlag) {
    createListItem(id, value);
    displayAlert("item added to the list", "success");
    container.classList.add('show-container');
    
    //add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();

  } else if (value && editFlag) {
    console.log("editing");
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    //edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();

  } else {
    displayAlert("please enter value", "danger");
  }
} //fn addItem()

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert after 1 second
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

// clear items
function clearItems(){
  const items = document.querySelectorAll('.grocery-item');
  if(items.length > 0){
    items.forEach(function(item){
      list.removeChild(item);
    });
    // remove the conatiner otherwise the clear items button will still be visible.
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    localStorage.removeItem('list');
    setBackToDefault();
  }
}

//edit function
function editItem(e){
  console.log("edit item");
  const element = e.currentTarget.parentElement.parentElement;
  //set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.textContent;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}

//delete function
function deleteItem(e){
  console.log("delete item");
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if(list.children.length === 0){
    container.classList.remove('show-container');
  }
  displayAlert('item deleted', 'danger');
  setBackToDefault();
  //console.log(grocery);
  //remove from local storage
  removeFromLocalStorage(id);
}

// set back to default
function setBackToDefault(){
  console.log("set back to default");
  grocery.value = '';
  editFlag = false;
  editID = "";
  submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
  //const grocery = {id,value};
  const grocery = {id:id,value:value};
  const items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  console.log("added to local storage");
}

function removeFromLocalStorage(id){
  let items = getLocalStorage();
  items = items.filter(function(item){
    if(item.id !== id){
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage(){
  return localStorage.getItem("list") 
    ?JSON.parse(localStorage.getItem('list'))
    :[];
}
//localStorage API
//setItem
//getItem
//removeItem
//save as Strings
// ****** SETUP ITEMS **********
function setUpItems(){
  const items = getLocalStorage();
  if(items.length > 0){
    items.forEach(function(item){
      createListItem(item.id, item.value);
    })
  }
  container.classList.add('show-container');
}

function createListItem(id, value){
  const element = document.createElement("arcticle");
  //add class
  element.classList.add("grocery-item");
  //add id as dataset
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
      <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
  //edit
  const editBtn = element.querySelector('.edit-btn');
  editBtn.addEventListener('click', editItem);
  //delete
  const deletBtn = element.querySelector('.delete-btn');
  deletBtn.addEventListener('click', deleteItem);
  
  //append child
  list.appendChild(element);
}