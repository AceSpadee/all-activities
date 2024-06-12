const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: colors.brightMagenta('Whats your name?'),
        name: "name",
    },
    {
        type: 'checkbox',
        message: colors.brightMagenta("what languages do you know?"),
        name: "languages",
        choices: ['html', 'css', 'javascript', 'c++']
    },
    {
        type: 'list',
        message: colors.brightMagenta("what is your preferred method of communication?"),
        name: "communication",
        choices: ['email', 'phone', 'text']
    }
  ])
  .then((response) => {
    fs.writeFile("log.txt", JSON.stringify(response), (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('succeess')  
        }
    });
  })
