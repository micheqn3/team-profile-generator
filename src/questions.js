const inquirer = require('inquirer');

let mQuestions = [
    {
        name: 'name', 
        message: 'What is the name of the team manager?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the ID of the team manager?',
        type: 'input'
    },
    { 
        name: 'email',
        message: "What is the team manager's email?",
        type: 'input'
    },
    { 
        name: 'office',
        message: "What is the team manager's office number?",
        type: 'input'
    },
    { 
        name: 'choice',
        message: "Do you want to add an engineer, intern, or finish building your team?",
        type: 'list',
        choices: [ "Add engineer", new inquirer.Separator(), "Add intern", new inquirer.Separator(), "Finish building team" ]

    }]

let eQuestions = [
    {
        name: 'name', 
        message: 'What is the name of the engineer?',
        type: 'input'
        },
        {
        name: 'id',
        message: 'What is the ID of the engineer?',
        type: 'input'
        },
        { 
        name: 'email',
        message: "What is the engineer's email?",
        type: 'input'
        },
        { 
        name: 'github',
        message: "What is the engineer's github?",
        type: 'input'
        },
        { 
        name: 'choice',
        message: "Do you want to add an engineer, intern, or finish building your team?",
        type: 'list',
        choices: [ "Add engineer", new inquirer.Separator(), "Add intern", new inquirer.Separator(), "Finish building team" ]
    }]

let iQuestions = [
    {
        name: 'name', 
        message: 'What is the name of the intern?',
        type: 'input'
        },
        {
        name: 'id',
        message: 'What is the ID of the intern',
        type: 'input'
        },
        { 
        name: 'email',
        message: "What is the intern's email?",
        type: 'input'
        },
        { 
        name: 'school',
        message: "What school does the intern go to?",
        type: 'input'
        },
        { 
        name: 'choice',
        message: "Do you want to add an engineer, intern, or finish building your team?",
        type: 'list',
        choices: [ "Add engineer", new inquirer.Separator(), "Add intern", new inquirer.Separator(), "Finish building team" ]
    }]
module.exports = {mQuestions, eQuestions, iQuestions}; // Export all prompts 