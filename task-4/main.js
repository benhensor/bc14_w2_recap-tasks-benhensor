// Task 4 - Bonus Tasks

// when the user enters something into the input field and clicks the button,
// a new item is added to the importantThings array
// each added item should be displayed in the list in an 'li' element
// the input field should be cleared after the user clicks the button

// set global variables
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

  // create a new list item and add it to the list
  const listItem = document.createElement('li');
  // set the text content of the list item to the values from the input fields
  listItem.textContent = thing + ' - ' + priority;
  // add the list item to the list
  list.appendChild(listItem);
  console.log(importantThings[0]);
}

// create a button that orders the list by the priority value
const orderListButton = document.createElement('button');
// set the text content of the button
orderListButton.textContent = 'Order List';
// add the button to the body
document.body.appendChild(orderListButton);
// add an event listener to the button
orderListButton.addEventListener('click', orderList);

// write a function that orders the importantThings array by the priority value
function orderList() {
  // sort the array by the priority value
  importantThings.sort(function(a, b) {return a.number - b.number});
  // clear the list
  document.querySelector('ol').innerHTML = '';
  // create a variable for the list item
  for (let i = 0; i < importantThings.length; i++) {
    // create a new list item and add it to the list
    listItem = document.createElement('li');
    // set the text content of the list item to the values from the input fields
    listItem.textContent = importantThings[i].string + ' - ' + importantThings[i].number;
    list.appendChild(listItem);
  }
}

// add an event listener to the button
addToListButton.addEventListener('click', addImportantThing);


