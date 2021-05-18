[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Team Profile Generator

This repository contains a team profile generator that is run through the command line using Node.js. 
The application will use the Inquirer package to present a set of questions to the user about each
employee in their team, which will be categorized into these classes: 
- Employee (parent class)
- Engineer (sub-class) 
- Intern (sub-class) 
- Manager (sub-class)

The prompts will continue to ask the user whether they want to add another engineer, intern, or finish building their team.
If they choose to finish building their team, the applcation will retrieve the user data and render an HTML document that lists the profiles of
each team member, with their respective information. 

### Installation 

1. Make sure you have Node.js to run the application
2. Clone this repo
> HTTPS: `https://github.com/micheqn3/team-profile-generator.git` <br>
> SSH: `git@github.com:micheqn3/team-profile-generator.git`
3. Install the NPM package 
> npm install
4. Run the application in command line 
> node index.js

### This repository contains: 

  - index.js - This file initializes a new Application object and starts the application.
  - Application.js - This file contains the class Application, which controls the overall flow of the application and renders the HTML file 
  based on user input.
  - Employee.js/Engineer.js/Intern.js/Manager.js - These files contain the specific properties/methods for each class.
  - questions.js - This file contains the prompts that will be shown to the user using Inquirer.
  - template.js - This file contains helper templates to render the HTML file.

### Technologies/Languages used: 

  - JavaScript
  - Node.js
  - Inquirer
  - Jest
  - HTML/CSS


### License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT 

### Walkthrough Demo

