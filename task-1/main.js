const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

// Task 1

// Write a function called 'makeLegend' that takes in a name as a string
// return a new string that the name to the string ' is now a legend.'

function makeLegend(name) {
  return name + ' is now a legend.';
}

console.log(makeLegend('Ben'))

let legendaryCelebs = [];

// for loop that cycles through each array item
for (let i = 0; i < celebs.length; i++) {

// the push() method is used to add each cycle of the for loop to the new array
// in this instance, push takes the makeLegend function as it's parameter.
  legendaryCelebs.push(makeLegend(celebs[i]));
}

// create a variable called vowelCelebs assigned to an empty array
let vowelCelebs = []; 

// create a regular expression called vowels that matches
// any string that starts with a vowel
// (^ means "start of string" and [aeiou] means "any vowel").
// The i flag makes the regular expression case-insensitive.
 let vowels = /^[aeiou]/i;     

// for loop as previous
for (let i = 0; i < celebs.length; i++) {

// the existing array is assigned to the new array (vowelCelebs) but only including entries that match the test range in the vowels variable
  vowelCelebs = celebs.filter(element => vowels.test(element));
}

let vowelCelebsTwo = [];
let vowelsTwo = ['A','E','I','O','U'];

for (let i = 0; i < celebs.length; i++) {
  const firstLet = celebs[i].charAt(0);
  if (vowelsTwo.includes(firstLet)) {
    vowelCelebsTwo.push(celebs[i]);
  }
}

console.log(vowelCelebsTwo);