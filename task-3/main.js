// Task 3

// Using fetch get a random cat img from the cat API 'https://thecatapi.com'
// use the retreived img url to display the img using the img element id 'cat-here'
// create a button to add a new img with each click


async function getCat() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const unpacked = await response.json();
  document.getElementById('cat-here').src = unpacked[0].url;
}

getCat();

const catButton = document.createElement("button");
catButton.textContent = "New Cat";
document.querySelector("body").appendChild(catButton);

catButton.addEventListener('click', getCat);