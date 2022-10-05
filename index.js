const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/generateHTML');
const teamArray = [];

//inquirer prompts - would love to add more logic here in the future to combine these prompts with conditional prompts (add the office number prompt only if the role is manager)

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

    //start with base/default employee


    //engineer prompts

    //intern prompts

    //manager prompts

//function to add the employee

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