const inquirer = require('inquirer');
const colors = require('colors');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What text would you like to log?',
        name: "text",
    },
    {
        type: 'list',
        message: "what color would you like",
        name: "color",
        choices: ["red", "blue", "green", "yellow", "cyan", "magenta"]
  }
  ])
  .then((response) => {
    console.log(colors[response.color](response.text))
  })
