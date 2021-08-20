const Employee = require("./classes/employee")
const Manager = require("./classes/manager")
const Engineer = require("./classes/engineer")
const Intern = require("./classes/intern")

const fs = require("fs")
const inquirer = require("inquirer")
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const createHtml = require("./assets/templates/html")


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

    const managerCard = createManagerCard(manager)
    const engineerCards = createEngineerCards(engineers)
    const internCards = createInternCards(interns)
    const html = createHtml(managerCard, engineerCards, internCards)
})

function createManagerCard (manager) {
    const managerCard = `<div class="card">
    <div class="card-title">
        <h3 class="name">${manager.name}</h3>
        <h4 class="type">${manager.type}</h4>
    </div>
    <div class="card-body">
        <p>ID: <span class="ID">${manager.id}</span></p>
        <p>Email: <span class="Email"><a href="mailto:${manager.email}">${manager.email}</a></span></p>
        <p>Office Number: <span class="officeNum">${manager.officeNum}</span></p>
    </div>
</div>`
return managerCard
}

function createEngineerCards (engineers) {
    let engineerCards = ``
    for(let i = 0; i < engineers; i++) {
        let engineer = engineers[i]
        let card = `<div class="card">
        <div class="card-title">
            <h3 class="name">${engineer.name}</h3>
            <h4 class="type">${engineer.type}</h4>
        </div>
        <div class="card-body">
            <p>ID: <span class="ID">${engineer.id}</span></p>
            <p>Email: <span class="Email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
            <p>Github: <span class="Github">${engineer.github}</span></p>
        </div>
    </div>`
    }
}