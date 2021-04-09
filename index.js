//const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const questions = [
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
  {
    type: "list",
    name: "addTeam",
    message: "Would you like to add anyone to your team?",
    choices: ["Engineer", "Intern", "No one else to add"],
  },
  {
    type: "input",
    name: "engName",
    message: "Please enter your engineers name",
    when: function (answers) {
      return answers.addTeam === "Engineer";
    },
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
