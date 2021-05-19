const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, github, email) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
    generateE(name, id, github, email) {
        return`
            <div class="row"> <!-- Engineer -->
                <div class="col s12 m6 l4"> 
                    <div class="card center-align hoverable">
                        <p class="name">${name}</p>
                        <i class="fas fa-user-cog fa-3x"></i>
                        <p>Engineer</p>
                        <div class="card-content">
                            <p>ID: ${id}</p>
                            <p>Github:<a href="https://github.com/${github}">${github}</a></p>
                        <div class="card-action">
                            <a href="mailto:${email}" class="waves-effect waves-light btn"><i class="material-icons right">send</i>Email</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
module.exports = Engineer;