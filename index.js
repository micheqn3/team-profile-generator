const inquirer = require('inquirer');

inquirer  
    .prompt([
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
            message: 'What is the email of the team manager?',
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

        },

    ])
    .then(answers  => {
        console.log(answers)

    })
    .catch(error => {
        if(error.isTtyError) {
            console.log("Prompt couldn't be rendered in this current environment.")
        } else {
            console.log("Something else went wrong.")
        }
    })
