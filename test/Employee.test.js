const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new class given valid parameters", () => {
            const e1 = new Employee("Michelle", 123, "michelle@gmail.com")
            expect(e1.name).toEqual("Michelle");
            expect(e1.id).toEqual(123);
            expect(e1.email).toEqual("michelle@gmail.com")
        })
        it("should return undefined given no parameters", () => {
            const e2 = new Employee();
            expect(e2.name).toBeUndefined();
            expect(e2.id).toBeUndefined();
            expect(e2.email).toBeUndefined();
        })
    })
    describe("Methods", () => {
        it("should return the name", () => {
            const e3 = new Employee("Jeff", 321, "jeff@gmail.com");
            expect(e3.getName()).toEqual("Jeff");
        })
        it("should return the id", () => {
            const e3 = new Employee("Jeff", 321, "jeff@gmail.com");
            expect(e3.getId()).toEqual(321);
        })
        it("should return the email", () => {
            const e3 = new Employee("Jeff", 321, "jeff@gmail.com");
            expect(e3.getEmail()).toEqual("jeff@gmail.com");
        })
        it("should return employee as the role", () => {
            const e3 = new Employee("Jeff", 321, "jeff@gmail.com");
            expect(e3.getRole()).toEqual("Employee");
        })

    })
})