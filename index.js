const Employee = require("./classes/employee")
const Manager = require("./classes/manager")
const Engineer = require("./classes/engineer")
const Intern = require("./classes/intern")

const fs = require("fs")
const inquirer = require("inquirer")
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


inquirer.prompt([
    {
        type: 'input',
        message: 'What is the managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the managers ID number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the managers email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'officeNum',
    },
    {
        type: 'loop',
        name: "employees",
        message: "add another employee?",
        questions: [
            {
                type: 'list',
                message: 'What type of employee are you adding?',
                name: 'type',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                message: 'What is the employees name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the employees ID number?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the employees email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the employees github username?',
                name: 'github',
                when: (employee) => employee.type === 'Engineer'
            },
            {
                type: 'input',
                message: 'What is the name of the employees school?',
                name: 'school',
                when: (employee) => employee.type === 'Intern'
            },
        ]
    }
])
.then((data) => {
    const manager = new Manager("Manager", data.name, data.id, data.email, data.officeNum)
    const employees = data.employees
    const engineers = []
    const interns = []

    for(let i = 0; i < employees.length; i++) {
        const e = employees[i]
        if (e.type === "Engineer") {
            const engineer = new Engineer(e.type, e.name, e.id, e.email, e.github)
            engineers.push(engineer)
        } else if (e.type === "Intern") {
            const intern = new Intern(e.type, e.name, e.id, e.email, e.school)
            interns.push(intern)
        }
    }

    console.log(manager)
    console.log(engineers)
    console.log(interns)

    
})