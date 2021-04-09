//const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

newManager = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Please enter managers name",
    },
    {
      type: "input",
      name: "mgrID",
      message: "Please enter your ID number",
    },
    {
      type: "input",
      name: "mgrEmail",
      message: "Please enter your email",
    },
    {
      type: "input",
      name: "offNum",
      message: "Please enter your office phone number",
    },
  ]);
};

newEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "engName",
      message: "Please enter your engineers name",
    },
    {
      type: "input",
      name: "engID",
      message: "Please enter your engineers ID number",
    },
    {
      type: "input",
      name: "engEmail",
      message: "Please enter your engineers email",
    },
    {
      type: "input",
      name: "gitHub",
      message: "Please enter your engineers GitHub username",
    },
  ]);
};

newIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "intName",
      message: "Please enter your intern's name",
    },
    {
      type: "input",
      name: "intID",
      message: "Please enter your interns ID number",
    },
    {
      type: "input",
      name: "intEmail",
      message: "Please enter your interns email",
    },
    {
      type: "input",
      name: "intSchool",
      message: "Please enter your interns school",
    },
  ]);
};

const questions = [
  {
    type: "list",
    name: "addTeam",
    message: "Would you like to add anyone to your team?",
    choices: ["Engineer", "Intern", "No one else to add"],
  },
];

function init() {
  console.log("Please build your team");
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
