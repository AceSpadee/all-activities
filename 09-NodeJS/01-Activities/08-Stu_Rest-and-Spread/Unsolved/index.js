// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// its the spread opperator
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// a copy of the songs array
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // it takes 2 parameters (a) and (b). the current value of (b) is added to (a) then sums all the elements in the array
  // is sums of all the elements in the array.
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
//  the number 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// the rest paramerter is being used and is being reduced
const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);

// TODO: What do you expect to be logged in the console?
// it would log 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// it would log 110
console.log(additionSpread(1, 2, 3, 4, 100));
