const Employee = require("../lib/Employee")

describe("class: Employee", () => {
    describe("properties", () => { 
        it("Has a name property that is a string" , () => {
            const employee = new Employee("Lewis Chatham", 1, "Lewis@test.com")

            expect(employee.hasOwnProperty("name")).toBeTruthy();
            expect(typeof employee.name).toBe("string")
        })
        it("Has an id property that is a number", () => {
            const employee = new Employee("Lewis Chatham", 1, "Lewis@test.com")

            expect(employee.hasOwnProperty("id")).toBeTruthy();
            expect(typeof employee.id).toBe("number")
        })
        it("Has an email property that is a string", () => {
            const employee = new Employee("Lewis Chatham", 1, "Lewis@test.com")

            expect(employee.hasOwnProperty("email")).toBeTruthy();
            expect(typeof employee.email).toBe("string")
        })
    })
    describe("methods", () => {
        describe("getName", () => {
            it("Should return the name of the employee", () => {
                const employee = new Employee("Lewis Chatham", 1, "Lewis@test.com")

                expect(employee.getName()).toBe("Lewis Chatham")
            })
        })
        describe("getId", () => {
            it("Should return the id of the employee", () => {
                const employee = new Employee("Lewis Chatham", 1, "Lewis@test.com")

                expect(employee.getId()).toBe(1)
            })
        })
        describe("getEmail", () => {
            it("Should return the email of the employee", () => {
                const employee = new Employee("Lewis Chatham", 1, "Lewis@test.com")

                expect(employee.getEmail()).toBe("Lewis@test.com")
            })
        })
        describe("getRole", () => {
            it("Should return the role of the employee", () => {
                const employee = new Employee("Lewis Chatham", 1, "Lewis@test.com")

                expect(employee.getRole()).toBe("Employee")
            })
        })
    })
})