const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Enginner';
    }
}
/*
const jeff = new Engineer('Jeff', '2627', 'jefylee@96', 'jeff@github.com')
console.log(jeff.getGithub());
*/

module.exports = Engineer;