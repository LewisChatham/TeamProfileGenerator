const Employee = require("./employee");

class Manager extends Employee {
    constructor(role, name, id, email, officeNum) {
        super(role, name, id, email)
        this.officeNum = officeNum;
    }
}

module.exports = Manager