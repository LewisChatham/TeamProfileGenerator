const fs = require("fs")
const inquirer = require("inquirer")
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer.prompt({
    type: "loop",
    name: "teammates",
    message: "add another teammate?",
    questions: [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
    ]
}).then((data) => {

})