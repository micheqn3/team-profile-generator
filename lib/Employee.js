class Employee { // Parent class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getname() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
/*
const Michelle = new Employee("Michelle", '1222', 'miche@email.com')
console.log(Michelle.getRole())
*/

module.exports = Employee;