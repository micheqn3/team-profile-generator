const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const {mQuestions, eQuestions, iQuestions} = require('./questions')


class Application { // This class will control the flow of the application
    start() {
        inquirer.prompt(mQuestions).then(answers => { // Starts first prompt for team manager
            let manager1 = new Manager(answers.name, answers.id, answers.email, answers.office); // Creates new manager class
            console.log(manager1)
            if (answers.choice === "Add engineer") {
                this.startE();
            }

        }).catch(error => {
            if(error.isTtyError) {
                console.log("Prompt couldn't be rendered in this current environment.")
            } else {
                console.log("Something else went wrong.")
            }
        })
    }
    startE() {
        inquirer.prompt(eQuestions).then(answers => { // Starts engineer prompts 
            let engineer1 = new Engineer(answers.name, answers.id, answers.email, answers.github) // Creates new engineer class
            console.log(engineer1)

        })
    }
    startI() {
        inquirer.prompt(eQuestions).then(answers => { // Starts intern prompts 
            let intern1 = new Engineer(answers.name, answers.id, answers.email, answers.school) // Creates new intern class
            console.log(intern1)

        })
    }
}

module.exports = Application;