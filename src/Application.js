const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const {mQuestions, eQuestions, iQuestions} = require('./questions')

class Application { // This class will control the flow of the application
    start() {
        inquirer.prompt(mQuestions).then(answers => { // Starts first prompt for team manager
            let manager1 = new Manager(answers.name, answers.id, answers.email, answers.office); // Creates new manager class
            console.log(manager1);
            this.pick(answers.choice);
            

        }).catch(error => {
            if(error.isTtyError) {
                console.log("Prompt couldn't be rendered in this current environment.");
            } else {
                console.log("Something else went wrong.");
            }
        })
    }

    pick(a) { // Starts new prompt or exits node based on user input 
        if (a === "Add engineer") {
            this.startE();
        } else if(a === "Add intern") {
            this.startI();
        } else if (a === "Finish building team") { 
            this.finish();
        }
    }

    startE() {
        inquirer.prompt(eQuestions).then(answers => { // Starts engineer prompts 
            let engineer1 = new Engineer(answers.name, answers.id, answers.email, answers.github); // Creates new engineer class
            console.log(engineer1);
            this.pick(answers.choice);
        })
    }

    startI() {
        inquirer.prompt(iQuestions).then(answers => { // Starts intern prompts 
            let intern1 = new Intern(answers.name, answers.id, answers.email, answers.school); // Creates new intern class
            console.log(intern1);
            this.pick(answers.choice);
        })
    }

    finish() {
        // console.log("goodbye"), write the rest of the HTML, and exit the app
        console.log("\nGoodbye!");
        process.exit(0);
    }
}

module.exports = Application;