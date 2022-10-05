// name, id, email, getName(), getID(), getEmail(), getRole() - returns Employee
// this constructor will be extended to the other roles

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email=email
    }
}

module.exports = Employee;