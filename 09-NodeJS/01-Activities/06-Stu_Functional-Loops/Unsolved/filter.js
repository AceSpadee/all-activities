const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(data => {
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be? 
const primeArray = originalArray.filter(isPrime);
// it is filtering out if num is a divisible by 1.               the value would be 2,3,5 (integer) return true for prime numbers
// its filtering out the numbers that are not divisible by 1
// loops through the array and checks if the number is a prime number and returns true



// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
const moreThan5Array = originalArray.filter(num => num > 5);
  // this filters out if num is less than 5 otherwise it is stored into moreThan5Array.   the value would be 10 (integer)
  // its filtering out numbers that are not greater than 5
  // creates a new array and checks if the number in the origin array is greater than 5 it will be added to the new array