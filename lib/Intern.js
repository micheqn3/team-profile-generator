const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, school, email) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
    generateI(){
        return`
            <div class="row"> <!--Intern -->
                <div class="col s12 m6 l4"> 
                    <div class="card center-align hoverable">
                        <p class="name">${this.name}</p>
                        <i class="fas fa-graduation-cap fa-3x"></i>
                        <p>Intern</p>
                        <div class="card-content">
                            <p>ID: ${this.id}</p>
                            <p>School: ${this.school}</p>
                        <div class="card-action">
                            <a href="mailto:${this.email}" class="waves-effect waves-light btn"><i class="material-icons right">send</i>Email</a>
                        </div>
                    </div>
                </div>
            </div> 
        `
    }
}

module.exports = Intern;