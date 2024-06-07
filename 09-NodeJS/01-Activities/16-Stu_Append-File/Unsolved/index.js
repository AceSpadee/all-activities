// TODO: What are we importing?
// we are importing the fs module (file system)
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()

// log.txt create a file named log.txt if the file doesnt excist

// proccess.argv[2]\n takes the third command line argument and appends it onto log.txt file on a new line

// err is a callback function that is executed after the file operation is complete.
//  If an error occurs during the file operation, Node.js will pass an error object to this function

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works

//   if the condition is true, err is evaluated; otherwise, the expression after the : is evaluated.
//   if err is true (meaning there is an error) console log the error. if err is false (meaning no error) console.log commit logged
  err ? console.error(err) : console.log('Commit logged!')
);
