const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, office, email) {
        super(name, id, email);
        this.office = office;
    }
    getRole() {
        return 'Manager';
    }
    getOffice() {
        return this.office;
    }
    generateM() {
        return`
            <div class="row"> <!-- Manager -->
                <div class="col s12 m6 l4"> 
                    <div class="card center-align hoverable">
                        <p class="name">${this.name}</p>
                        <i class="fas fa-user-tie fa-3x"></i>
                        <p>Manager</p>
                        <div class="card-content">
                            <p>ID: ${this.id}</p>
                            <p>Office #: ${this.office}</p>
                        <div class="card-action">
                            <a href="mailto:${this.email}" class="waves-effect waves-light btn"><i class="material-icons right">send</i>Email</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

module.exports = Manager;

