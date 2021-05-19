const inquirer = require('inquirer'); // Require package 
const chalk = require('chalk');

const validateInput = (input) => { // Validation for if the user doesn't enter a value
    if (!input) {
        return chalk.red("Please enter a value.");
      }
      return true;
}
let mQuestions = [
    {
        name: 'name', 
        message: 'What is the name of the team manager?',
        type: 'input',
        validate: validateInput
    },
    {
        name: 'id',
        message: 'What is the ID of the team manager?',
        type: 'input',
        validate: validateInput
    },
    { 
        name: 'email',
        message: "What is the team manager's email?",
        type: 'input',
        validate: validateInput
    },
    { 
        name: 'office',
        message: "What is the team manager's office number?",
        type: 'input',
        validate: validateInput
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
        type: 'input',
        validate: validateInput
        },
        {
        name: 'id',
        message: 'What is the ID of the engineer?',
        type: 'input',
        validate: validateInput
        },
        { 
        name: 'email',
        message: "What is the engineer's email?",
        type: 'input',
        validate: validateInput
        },
        { 
        name: 'github',
        message: "What is the engineer's github?",
        type: 'input',
        validate: validateInput
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
        type: 'input',
        validate: validateInput
        },
        {
        name: 'id',
        message: 'What is the ID of the intern',
        type: 'input',
        validate: validateInput
        },
        { 
        name: 'email',
        message: "What is the intern's email?",
        type: 'input',
        validate: validateInput
        },
        { 
        name: 'school',
        message: "What school does the intern go to?",
        type: 'input',
        validate: validateInput
        },
        { 
        name: 'choice',
        message: "Do you want to add an engineer, intern, or finish building your team?",
        type: 'list',
        choices: [ "Add engineer", new inquirer.Separator(), "Add intern", new inquirer.Separator(), "Finish building team" ]
    }]
module.exports = {mQuestions, eQuestions, iQuestions}; // Export all prompts 