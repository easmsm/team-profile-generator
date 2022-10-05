// name, id, email, getName(), getID(), getEmail(), getRole() - returns Employee
// this constructor will be extended to the other roles

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email=email
    }
    
// functions to all for calling name, id, and email - I want to be able to call them all separately

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }
    getRole () {
        return "Employee";
    }
};


module.exports = Employee;