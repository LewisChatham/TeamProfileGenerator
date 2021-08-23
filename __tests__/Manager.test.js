const Manager = require("../lib/Manager")

describe("class: Manager", () => {
    describe("properties", () => { 
        it("Has a name property that is a string" , () => {
            const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

            expect(manager.hasOwnProperty("name")).toBeTruthy();
            expect(typeof manager.name).toBe("string")
        })
        it("Has an id property that is a number", () => {
            const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

            expect(manager.hasOwnProperty("id")).toBeTruthy();
            expect(typeof manager.id).toBe("number")
        })
        it("Has an email property that is a string", () => {
            const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

            expect(manager.hasOwnProperty("email")).toBeTruthy();
            expect(typeof manager.email).toBe("string")
        })
        it("Has an officeNumber property that is a number" , () => {
            const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

            expect(manager.hasOwnProperty("officeNumber")).toBeTruthy();
            expect(typeof manager.officeNumber).toBe("number")
        })
    })
    describe("methods", () => {
        describe("getName", () => {
            it("Should return the name of the manager", () => {
                const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

                expect(manager.getName()).toBe("Lewis Chatham")
            })
        })
        describe("getId", () => {
            it("Should return the id of the manager", () => {
                const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

                expect(manager.getId()).toBe(1)
            })
        })
        describe("getEmail", () => {
            it("Should return the email of the manager", () => {
                const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

                expect(manager.getEmail()).toBe("Lewis@test.com")
            })
        })
        describe("getRole", () => {
            it("Should return the role of the manager", () => {
                const manager = new Manager("Lewis Chatham", 1, "Lewis@test.com", 1)

                expect(manager.getRole()).toBe("Manager")
            })
        })
    })
})