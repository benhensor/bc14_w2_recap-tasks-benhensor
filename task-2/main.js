// Task 2

// Use setInterval() to increase the '<p>' element value by 1 each second

// variable 'count' assigned to the page element
let count = document.querySelector('#count');
// variable parsedCount uses parsedInt to convert and store the textContent of the count element to an integer
let parsedCount = parseInt(count.textContent);

let countInterval = setInterval(function() {            // setInterval() calls a function
                      parsedCount++;                    // the value of parsedCount is increased by 1
                      count.textContent = parsedCount;  // the textContent of count is re-assigned the new value of parsedCount
                      if (parsedCount == 12) {          // if the value of parsedCount is equal to 12
                        stopCount();                    // call function stopCount()
                      }
                    }, 1000);                           // setInterval() repeats every 1000ms

function stopCount() {                                  // create function called stopCount()
  clearInterval(countInterval);                         // cleaInterval stops the variable countInterval
}

