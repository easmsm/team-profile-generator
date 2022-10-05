const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/generateHTML');
const teamArray = [];

//inquirer prompts - would love to add more logic here in the future to combine these prompts with conditional prompts (add the office number prompt only if the role is manager)

    //start with base/default employee

    //engineer prompts

    //intern prompts

    //manager prompts

//function to add the employee

//feed these prompts into the cards