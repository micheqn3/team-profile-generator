const inquirer = require('inquirer'); // Require package 
const fs = require('fs'); // File system module
const Engineer = require('./Engineer'); // Require classes
const Intern = require('./Intern'); 
const Manager = require('./Manager');
const {mQuestions, eQuestions, iQuestions} = require('../src/questions') // Require prompts
const {startHtml, endHtml} = require('../src/template') // Require helper templates

class Application { // This class will control the flow of the application
    start() {
        this.createHtml(); // Start to create HTML file
        inquirer.prompt(mQuestions).then(answers => { // Starts first prompt for team manager
            let m = new Manager(answers.name, answers.id, answers.office, answers.email); // Creates new manager class
            let newText = m.generateM(m.name, m.id, m.office, m.email); // Generate new HTML text
            this.updateHtml(newText); // Update file with rendered output
            this.pick(answers.choice); // Start new prompt based on user input
        
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
            this.promptE();
        } else if(a === "Add intern") {
            this.promptI();
        } else if (a === "Finish building team") { 
            this.finish();
        }
    }

    promptE() { // Starts engineer prompts 
        inquirer.prompt(eQuestions).then(answers => { 
            let e = new Engineer(answers.name, answers.id, answers.github, answers.email); // Creates new engineer class
            let newText = e.generateE(e.name, e.id, e.github, e.email);
            this.updateHtml(newText);
            this.pick(answers.choice);
        })
    }

    promptI() { // Starts intern prompts 
        inquirer.prompt(iQuestions).then(answers => { 
            let i = new Intern(answers.name, answers.id, answers.school, answers.email); // Creates new intern class
            let newText = i.generateI(i.name, i.id, i.school, i.email)
            this.updateHtml(newText);
            this.pick(answers.choice);
        })
    }

    createHtml() { // Creates first part of HTML
        fs.appendFile('./dist/sample.html', startHtml, (error) => {
            if (error) throw error;
        })
    }

    updateHtml(newText) { // Updates HTML file with user input
        fs.appendFile('./dist/sample.html', newText, (error) => {
            if (error) throw error;
        })
    }

    finish() { // Finalizes the HTML and ends the application
        fs.appendFile('./dist/sample.html', endHtml, (error) => {
            if (error) throw error;
        })
        console.log("\nYour team profile has been generated!");
    }
}

module.exports = Application;

