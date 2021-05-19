const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should inherit parent class methods", () => {
            const e1 = new Engineer("Mich", 767, "micheqn3","mitchi1239@gmail.com" )
            expect(e1.name).toEqual("Mich");
            expect(e1.id).toEqual(767);
            expect(e1.email).toEqual("mitchi1239@gmail.com")
        })
        it("should have its own github property", () => {
            const e2 = new Engineer("Jeff", 123, "jefflee", "jeff@gmail.com")
            expect(e2.github).toEqual("jefflee")
        })
    })
    describe("Methods", () => {
        it("should override the parent class role and return engineer", () => {
            const e3 = new Engineer("Jay", 435, "jaylee", "jay@gmail.com")
            expect(e3.getRole()).toEqual("Engineer");
        })
        it("should return github", () => {
            const e4 = new Engineer("Jack", 425, "jack", "jack@gmail.com");
            expect(e4.getGithub()).toEqual("jack");
        })
        it("should return the template literal", () => {
            const e5 = new Engineer("Michelle", 777, "mich", "mich@gmail.com");
            expect(e5.generateE(e5.name, e5.id, e5.github, e5.email)).toEqual(
            `
            <div class="row"> <!-- Engineer -->
                <div class="col s12 m6 l4"> 
                    <div class="card center-align hoverable">
                        <p class="name">Michelle</p>
                        <i class="fas fa-user-cog fa-3x"></i>
                        <p>Engineer</p>
                        <div class="card-content">
                            <p>ID: 777</p>
                            <p>Github:<a href="https://github.com/mich">mich</a></p>
                        <div class="card-action">
                            <a href="mailto:mich@gmail.com" class="waves-effect waves-light btn"><i class="material-icons right">send</i>Email</a>
                        </div>
                    </div>
                </div>
            </div>
        `)
        })  
    })
})