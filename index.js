const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/generateHTML');
const teamArray = [];

//inquirer prompts 

// List to choose role
const addEmployee = () => {
    console.log(`
    ========================================
            Let's Build Your Team
    ========================================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Who would you like to add to your team?",
            choices: ['Employee', 'Engineer', 'Intern', 'Manager']
        },
    ])
    // where to send depending on the type of employee that is chosen
    .then(employeeType => {
        if(employeeType.role === 'Employee') {
            employeeInput()
        } else if (employeeType.role === 'Engineer') {
            engineerInput()
        } else if (employeeType.role === 'Intern') {
            internInput()
        } else {
            managerInput()
        }
        console.log(employeeType)
    })

};
    //the source of the validation function for email that I'm using: https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
    
    //start with base/default employee
    const employeeInput = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Who are we talking about, again?");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the employee's ID."
            },
            {
                type: 'input',
                name:'email',
                message: "Please enter the employee's email!",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            console.log('Thanks!')
                            return true;
                        } else {
                            console.log ('Please enter an email!')
                            return false; 
                        }
                    }
            },
            // prompt for adding more team members/ending the prompts
            {
                type: 'confirm',
                name: 'confirmAddEmployees',
                message: 'Is there anyone else you want to add to your team?',
                default: false
            }
    ])
    .then(employeeInput => {
        console.log(employeeInput)
        const {name, id, email, confirmAddEmployees} = employeeInput;

        teamArray.push(employee);
        if(confirmAddEmployees){
            addEmployee();
        } else {
            console.log(teamArray)
            const html = generateHTML(teamArray)
            writeFile(html)
        }
    })

    };
    //engineer prompts
    const engineerInput = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Who are we talking about, again?");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the engineer's ID."
            },
            {
                type: 'input',
                name:'email',
                message: "Please enter the engineer's email!",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            console.log('Thanks!')
                            return true;
                        } else {
                            console.log ('Please enter an email!')
                            return false; 
                        }
                    }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            },
            // prompt for adding more team members/ending the prompts
            {
                type: 'confirm',
                name: 'confirmAddEmployees',
                message: 'Is there anyone else you want to add to your team?',
                default: false
            }
    ])
    .then(engineerInput => {
        console.log(engineerInput)
        const {name, id, email, github, confirmAddEmployees} = engineerInput;

        teamArray.push(engineer);
        if(confirmAddEmployees){
            addEmployee();
        } else {
            console.log(teamArray)
            const html = generateHTML(teamArray)
            writeFile(html)
        }
    })
}


    //intern prompts
    const internInput = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Who are we talking about, again?");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the intern's ID."
            },
            {
                type: 'input',
                name:'email',
                message: "Please enter the intern's email!",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            console.log('Thanks!')
                            return true;
                        } else {
                            console.log ('Please enter an email!')
                            return false; 
                        }
                    }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            },
            // prompt for adding more team members/ending the prompts
            {
                type: 'confirm',
                name: 'confirmAddEmployees',
                message: 'Is there anyone else you want to add to your team?',
                default: false
            }
    ])
    .then(internInput => {
        console.log(internInput)
        const {name, id, email, school, confirmAddEmployees} = internInput;

        teamArray.push(intern);
        if(confirmAddEmployees){
            addEmployee();
        } else {
            console.log(teamArray)
            const html = generateHTML(teamArray)
            writeFile(html)
        }
    })
}
    //manager prompts
    const managerInput = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Who are we talking about, again?");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the manager's ID."
            },
            {
                type: 'input',
                name:'email',
                message: "Please enter the manager's email!",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            console.log('Thanks!')
                            return true;
                        } else {
                            console.log ('Please enter an email!')
                            return false; 
                        }
                    }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office line?"
            },
            // prompt for adding more team members/ending the prompts
            {
                type: 'confirm',
                name: 'confirmAddEmployees',
                message: 'Is there anyone else you want to add to your team?',
                default: false
            }
    ])
    .then(managerInput => {
        console.log(managerInput)
        const {name, id, email, officeNumber, confirmAddEmployees} = managerInput;

        teamArray.push(manager);
        if(confirmAddEmployees){
            addEmployee();
        } else {
            console.log(teamArray)
            const html = generateHTML(teamArray)
            writeFile(html)
        }
    })
}

//call function to add whatever employee
addEmployee()

// write the actual HTML file - pulled from async work
const writeFile = html => {
    fs.writeFile('./dist/index.html', html, err => {
        // prevent errors from keeping us spinning in place
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team's profile has been generated! I popped it in the dist folder for your convenience.")
        }
    })
};