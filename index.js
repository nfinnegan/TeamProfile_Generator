//const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const createCards = require("./generateHTML");

//empty array to push objects into after user inputs data
const allEmployees = [];

//created function to write to HTML file which I invoke during an if/else statement in newTeammatePrompt()
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(__dirname, fileName), data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

//first prompt that gets asked is for the manager so they can build their team
newManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter your name",
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
    ])
    .then((answers) => {
      const nManager = new Manager(
        answers.managerName,
        answers.mgrID,
        answers.mgrEmail,
        answers.offNum
      );
      allEmployees.push(nManager);
      newTeammatePrompt();
    });
};

//separate prompt to be invoked after the each team member is built to check if they want to continuing adding or be finished
newTeammatePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addMember",
        message: "Would you like to add anyone to your team?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answers) => {
      if (answers.addMember === "Yes") {
        newTeammate();
      } else {
        console.log("team all built!", allEmployees);
        const fileName = "src/teamDEMO.html";
        writeToFile(fileName, createCards(allEmployees)); //creates HTML if "would you like to add a team member === no"
      }
    });
};

//Once newTeammatePrompt ==== yes, this prompt is invoked & goes through series of questions based of off Engineer or Intern
newTeammate = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Who would you like to add?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "empName",
        message: "Please enter name",
      },
      {
        type: "input",
        name: "empID",
        message: "Please enter ID number",
      },
      {
        type: "input",
        name: "empEmail",
        message: "Please enter email",
      },
      {
        type: "input",
        name: "gitHub",
        message: "Please enter your engineers GitHub username",
        when: function (answers) {
          return answers.role === "Engineer";
        },
      },
      {
        type: "input",
        name: "intSchool",
        message: "Please enter your interns school",
        when: function (answers) {
          return answers.role === "Intern";
        },
      },
    ])
    .then((answers) => {
      if (answers.role === "Engineer") {
        const nEng = new Engineer(
          answers.empName,
          answers.empID,
          answers.empEmail,
          answers.gitHub
        );
        allEmployees.push(nEng);
      } else if (answers.role === "Intern") {
        const nIntern = new Intern(
          answers.empName,
          answers.empID,
          answers.empEmail,
          answers.intSchool
        );
        allEmployees.push(nIntern);
      }
      newTeammatePrompt();
    });
};

//function to start application
function init() {
  console.log("Please build your team");
  newManager();
}

// Function call to initialize app
init();
