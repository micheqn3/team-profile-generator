const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe("Initialization", () => {
        it("should inherit parent class methods", () => {
            const i1 = new Intern("Mich", 767, "USC","mitchi1239@gmail.com" )
            expect(i1.name).toEqual("Mich");
            expect(i1.id).toEqual(767);
            expect(i1.email).toEqual("mitchi1239@gmail.com")
        })
        it("should have its own school property", () => {
            const i2 = new Intern("Jeff", 123, "CSUF", "jeff@gmail.com")
            expect(i2.school).toEqual("CSUF")
        })
    })
    describe("Methods", () => {
        it("should override the parent class role and return intern", () => {
            const i3 = new Intern("Jay", 435, "USC", "jay@gmail.com")
            expect(i3.getRole()).toEqual("Intern");
        })
        it("should return school", () => {
            const i4 = new Intern("Jack", 425, "USC", "jack@gmail.com");
            expect(i4.getSchool()).toEqual("USC");
        })
        it("should return the template literal", () => {
            const i5 = new Intern("Michelle", 777, "CSUF", "mich@gmail.com");
            expect(i5.generateI(i5.name, i5.id, i5.school, i5.email)).toEqual(
            `
            <div class="row"> <!--Intern -->
                <div class="col s12 m6 l4"> 
                    <div class="card center-align hoverable">
                        <p class="name">Michelle</p>
                        <i class="fas fa-graduation-cap fa-3x"></i>
                        <p>Intern</p>
                        <div class="card-content">
                            <p>ID: 777</p>
                            <p>School: CSUF</p>
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