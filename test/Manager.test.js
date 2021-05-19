const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("Initialization", () => {
        it("should inherit parent class methods", () => {
            const m1 = new Manager("Mich", 767, 12,"mitchi1239@gmail.com" )
            expect(m1.name).toEqual("Mich");
            expect(m1.id).toEqual(767);
            expect(m1.email).toEqual("mitchi1239@gmail.com")
        })
        it("should have its own office number property", () => {
            const m2 = new Manager("Jeff", 123, 43, "jeff@gmail.com")
            expect(m2.office).toEqual(43)
        })
    })
    describe("Methods", () => {
        it("should override the parent class role and return manager", () => {
            const m3 = new Manager("Jay", 435, 34, "jay@gmail.com")
            expect(m3.getRole()).toEqual("Manager");
        })
        it("should return the office number", () => {
            const m4 = new Manager("Jack", 425, 43, "jack@gmail.com");
            expect(m4.getOffice()).toEqual(43);
        })
        it("should return the template literal", () => {
            const m5 = new Manager("Michelle", 777, 32, "mich@gmail.com");
            expect(m5.generateM(m5.name, m5.id, m5.office, m5.email)).toEqual(
            `
            <div class="row"> <!-- Manager -->
                <div class="col s12 m6 l4"> 
                    <div class="card center-align hoverable">
                        <p class="name">Michelle</p>
                        <i class="fas fa-user-tie fa-3x"></i>
                        <p>Manager</p>
                        <div class="card-content">
                            <p>ID: 777</p>
                            <p>Office #: 32</p>
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