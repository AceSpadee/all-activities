const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// TODO: Add ordered list items containing four favorite foods
// const favfoods = prompt('Please enter your favorite food');

// if (favfoods == 1) {
//     alert('please enter a valid tag')
// } else {
//     const foods = document.createElement('ol');

//     foods.textContent = `${favfoods}`;
//     document.body.appendChild(foods);

// }

// prompt('please add another item');
//  foods.textContent = `${favfoods}`;

listEl.setAttribute('style', 'background-color: #333333, padding: 20px;');

li1.style.color = "white"
li1.style.padding = "5px"
li1.style.marginLeft = "35px"
li1.style.backgroundColor = "purple";
li1.textContent = "chicken";
listEl.appendChild(li1);

li2.style.color = "white"
li2.style.padding = "5px"
li2.style.marginLeft = "35px"
li2.style.backgroundColor = "black";
li2.textContent = "pizza";
listEl.appendChild(li2);

li3.style.color = "white"
li3.style.padding = "5px"
li3.style.marginLeft = "35px"
li3.style.backgroundColor = "green";
li3.textContent = "burger";
listEl.appendChild(li3);

li4.style.color = "white"
li4.style.padding = "5px"
li4.style.marginLeft = "35px"
li4.style.backgroundColor = "blue";
li4.textContent = "chicken burger";
listEl.appendChild(li4);



