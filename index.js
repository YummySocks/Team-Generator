const fs = require('fs')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const inquirer = require('inquirer')

const finalObj = {
    managers: '',
    engineers: [],
    interns: []
}

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
    .then((answers)=> questionManHandle(answers))
}
function engineerAsk(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: "engineer"
            },
            {
                type: 'input',
                message: "What is the engineer's id?",
                name: 'engineId'
            },
            {
                type: 'input',
                message:"What is the engineer's email?",
                name: 'engineEm'
            },
            {
                type: 'input',
                message: "What is the engineer's github",
                name: 'engineHub'
            },
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'choicesT',
                choices: ['Engineer','Intern',"I don't want any more team members"]
            }
        ])
        .then((answers)=> questionEngineHandle(answers))
}
function internAsk(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: "intern"
            },
            {
                type: 'input',
                message: "What is the engineer's id?",
                name: 'internId'
            },
            {
                type: 'input',
                message:"What is the intern's email?",
                name: 'internEm'
            },
            {
                type: 'input',
                message: "What is the intern's school",
                name: 'internSch'
            },
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'choicesT',
                choices: ['Engineer','Intern',"I don't want any more team members"]
            }
        ])
        .then((answers)=> questionInternHandle(answers))
}
function questionManHandle(answers){
    console.log(answers)
    let name = answers.manager
    let id = answers.manageId
    let email = answers.manageEm
    let officeNumber = answers.manageNumb
    const manageObj = new Manager(name,id,email,officeNumber)
    console.log(manageObj.getRole())
    finalObj.managers= manageObj
    filterQ(answers.choicesT)
}
function questionEngineHandle(answers){
    console.log(answers)
    let name = answers.engineer
    let id = answers.engineId
    let email = answers.engineEm
    let gitHub = answers.engineHub
    const engineObj = new Engineer(name,id,email,gitHub)
    finalObj.engineers.push(engineObj)
    filterQ(answers.choicesT)
}
function questionInternHandle(answers){
    console.log(answers)
    let name = answers.intern
    let id = answers.internId
    let email = answers.internEm
    let school = answers.internSch
    const internObj = new Intern(name,id,email,school)
    finalObj.interns.push(internObj)
    filterQ(answers.choicesT)
}

function filterQ (choicesT){
    switch (choicesT){
        case 'Engineer':
            return engineerAsk()
        case 'Intern':
            return internAsk()
        default: 
            return console.log(finalObj)
    }
}

function testing(){
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>
</head>
<body>
    <nav class="top-bar">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">My team</>
        </div>
    </nav>
    <ul>
       
    </ul>



<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>`
}


startAsk()