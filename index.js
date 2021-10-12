const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const inquirer = require('inquirer')

function startAsk (){
inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: "manager"
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'manageId'
        },
        {
            type: 'input',
            message:"What is the team manager's email?",
            name: 'manageEm'
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'manageNumb'
        },
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'choicesT',
            choices: ['Engineer','Intern',"I don't want any more team members"]
        }
    ])
}


startAsk()