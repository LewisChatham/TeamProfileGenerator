const Engineer = require("../lib/Engineer")

describe("class: Engineer", () => {
    describe("properties", () => { 
        it("Has a name property that is a string" , () => {
            const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

            expect(engineer.hasOwnProperty("name")).toBeTruthy();
            expect(typeof engineer.name).toBe("string")
        })
        it("Has an id property that is a number", () => {
            const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

            expect(engineer.hasOwnProperty("id")).toBeTruthy();
            expect(typeof engineer.id).toBe("number")
        })
        it("Has an email property that is a string", () => {
            const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

            expect(engineer.hasOwnProperty("email")).toBeTruthy();
            expect(typeof engineer.email).toBe("string")
        })
        it("Has a github property that is a string" , () => {
            const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

            expect(engineer.hasOwnProperty("github")).toBeTruthy();
            expect(typeof engineer.github).toBe("string")
        })
    })
    describe("methods", () => {
        describe("getName", () => {
            it("Should return the name of the engineer", () => {
                const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

                expect(engineer.getName()).toBe("Lewis Chatham")
            })
        })
        describe("getId", () => {
            it("Should return the id of the engineer", () => {
                const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

                expect(engineer.getId()).toBe(1)
            })
        })
        describe("getEmail", () => {
            it("Should return the email of the engineer", () => {
                const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

                expect(engineer.getEmail()).toBe("Lewis@test.com")
            })
        })
        describe("getRole", () => {
            it("Should return the role of the engineer", () => {
                const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

                expect(engineer.getRole()).toBe("Engineer")
            })
        })
        describe("getGithub", () => {
            it("Should return the github of the engineer", () => {
                const engineer = new Engineer("Lewis Chatham", 1, "Lewis@test.com", "LewisChatham")

                expect(engineer.getGithub()).toBe("LewisChatham")
            })
        })
    })
})