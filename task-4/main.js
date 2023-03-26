// Task 4 - Bonus Tasks

// when the user enters something into the input field and clicks the button,
// a new item is added to the importantThings array
// each added item should be displayed in the list in an 'li' element
// the input field should be cleared after the user clicks the button

let importantThings = [];
let listObject = {};
let addToListButton = document.querySelector('#add-to-list');
const list = document.querySelector('ol');

function addImportantThing() {
  // create variables for each input field
  const thing = document.getElementById('important-thing').value;
  const priority = document.getElementById('priority').value;
  // create an object with the values from the input fields
  listObject = {string: thing, number: priority};
  // add the object to the importantThings array
  importantThings.push(listObject);
  // clear the input fields
  document.getElementById('important-thing').value = '';
  document.getElementById('priority').value = '';

  const listItem = document.createElement('li');
  listItem.textContent = thing + ' - ' + priority;
  list.appendChild(listItem);
  console.log(importantThings[0]);
}

const orderListButton = document.createElement('button');
orderListButton.textContent = 'Order List';
document.body.appendChild(orderListButton);
orderListButton.addEventListener('click', orderList);

// write a function that orders the importantThings array by the priority value
function orderList() {
  importantThings.sort(function(a, b) {return a.number - b.number});
  document.querySelector('ol').innerHTML = '';
  for (let i = 0; i < importantThings.length; i++) {
    listItem = document.createElement('li');
    listItem.textContent = importantThings[i].string + ' - ' + importantThings[i].number;
    list.appendChild(listItem);
  }
}


addToListButton.addEventListener('click', addImportantThing);


