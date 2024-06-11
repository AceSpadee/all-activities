const inquirer = requirer('inquirer');
const colors = require('colors');

inquirer
  .prompt([
    {
        type: 'list',
        message: 'What text would you like to log?',
        name: "color",
        choices: ['red', 'blue', 'green',]
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });