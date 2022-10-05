// name, id, email, getName(), getID(), getEmail(), getRole() - returns Employee

module.exports = function() {};

function Role(name){
    this.name = name;

    if (this.name === 'employee'){
        return true;
    }
}

module.exports = Role;
