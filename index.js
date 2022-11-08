// imports/modules to be used
const generateHtml = require("./src/generateHtml");
const inquirer = require("inquirer");
const fs = require('fs');
const { exit } = require("process");
inquirer.registerPrompt('recursive', require('inquirer-recursive'));

//  Array of questions
const prompts = [
    {
        type: 'list',
        message: 'What role profile do you want to enter?',
        name: 'role',
        choices: ["Employee","Manager", "Engineer", "Intern"] 
    },
    {
        type: 'input',
        message: 'What is the name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is the Id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Email?',
        name: 'email',
    },
    {
        type: 'number',
        message: 'What is the office number?',
        name: 'officeNumber',
        when: function(answers){
            if (answers.role == "Manager") {
                return true
            }
            return false
        }
    },
    {
        type: 'input',
        message: 'What is your gitHub userName?',
        name: 'gitHubUserName',
        when: function(answers){
            if (answers.role == "Engineer") {
                return true
            }
            return false
        }
    },

    {
        type: 'input',
        message: 'What school did you go to?',
        name: 'school',
        when: function(answers){
            if (answers.role == "Intern") {
                return true
            }
            return false
        }
    },
]
// function for write to file
function writeToFile(fileName, data) {
    let html = generateHtml(data);
    fs.writeFile(fileName, md, (err) => {
        if (err) throw err;
    });
}
// Function to initialize app
function init() {
    inquirer.prompt({
        type: 'recursive',
        message: "Enter a new role",
        name: "roles",
        prompts: prompts,
      })
        .then((answers) => {
            //writeToFile("Html", answers)

        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
}

// Function call to initialize app
init();


