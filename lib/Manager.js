const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
/*
const elvin = new Manager('Elvin', "2828", "elvin@gmail.com", '1')
console.log(elvin.getRole())
*/

module.exports = Manager;

