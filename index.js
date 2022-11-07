const generateHtml = require("./src/generateHtml");
const inquirer = require("inquirer");
const fs = require('fs');
const { exit } = require("process");

//  Array of questions for user input in Node
const roleQuestion = [
    {
        type: 'list',
        message: 'What role profile do you want to enter?',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern", "Employee", "NONE"]
    },
]
const managerQuestions = [
    {
        type: 'number',
        message: 'What is your office number?',
        name: 'officeNumber',
    },
]
const employeeQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is your Id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
    },
]
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your gitHub userName?',
        name: 'gitHubUserName',
    },
]
const internQuestions = [
    {
        type: 'input',
        message: 'What school did you go to?',
        name: 'school',
    },
]


// Function to write README file
function getManagerData() {

    inquirer.prompt(employeeQuestions.concat(managerQuestions))

}
function getEmployeeData() {

    inquirer.prompt(employeeQuestions)
}
function getInternData() {

    inquirer.prompt(employeeQuestions.concat(internQuestions))
}
function getEngineerData() {

    inquirer.prompt(employeeQuestions.concat(engineerQuestions))
}
function writeToFile(fileName, data) {
    let html = generateHtml(data);
    fs.writeFile(fileName, md, (err) => {
        if (err) throw err;
    });
}
// Function to initialize app
function init() {
    inquirer.prompt(roleQuestion)
        .then((answers) => {
            if (answers.role == "Manager") {
                data = getManagerData()
            }
            if (answers.role == "Employee") {
                data = getEmployeeData()
            }
            if (answers.role == "Intern") {
                data = getInternData()
            }
            if (answers.role == "Engineer") {
                data = getEngineerData()
            }

            if (answers.role == "NONE") {
                exit
            }
            writeToFile("Html", data)
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
}

// Function call to initialize app
init();


