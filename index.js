//const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const allEmployees = [];

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

// newEngineer = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "engName",
//         message: "Please enter your engineers name",
//       },
//       {
//         type: "input",
//         name: "engID",
//         message: "Please enter your engineers ID number",
//       },
//       {
//         type: "input",
//         name: "engEmail",
//         message: "Please enter your engineers email",
//       },
//       {
//         type: "input",
//         name: "gitHub",
//         message: "Please enter your engineers GitHub username",
//       },
//     ])
//     .then((answers) => {
//       const nEng = new Engineer(
//         answers.engName,
//         answers.engID,
//         answers.engEmail,
//         answers.gitHub
//       );
//     });
// };

// newIntern = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "intName",
//         message: "Please enter your intern's name",
//       },
//       {
//         type: "input",
//         name: "intID",
//         message: "Please enter your interns ID number",
//       },
//       {
//         type: "input",
//         name: "intEmail",
//         message: "Please enter your interns email",
//       },
//       {
//         type: "input",
//         name: "intSchool",
//         message: "Please enter your interns school",
//       },
//     ])
//     .then((answers) => {
//       const nIntern = new Intern(
//         answers.intName,
//         answers.intID,
//         answers.intEmail,
//         answers.intSchool
//       );
//     });
// };

newTeammatePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Would you like to add anyone to your team?",
        choices: ["Engineer", "Intern", "No one else to add"],
      },
    ])
    .then((answers) => {
      answers.choices === "Engineer" || "Intern"
        ? newTeammate()
        : console.log("team all built!");
    });
};

newTeammate = () => {
  inquirer
    .prompt([
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
        newTeammatePrompt();
      } else if (answers.role === "Intern") {
        const nIntern = new Intern(
          answers.empName,
          answers.empID,
          answers.empEmail,
          answers.intSchool
        );
        allEmployees.push(nIntern);
        newTeammatePrompt();
      } else if ("No one else to add") {
        return;
      }
    });
};

// .then((answers) => {
//     switch (answers.choices) {
//       case "Engineer":
//         response = newEngineer();
//         break;
//       case "Intern":
//         response = newIntern();
//         break;
//       case "No one else to add":
//         response = "";
//         break;
//     }
//     return answers[response];
//   });

// const questions = [
//   {
//     type: "input",
//     name: "managerName",
//     message: "Please enter managers name",
//   },
//   {
//     type: "input",
//     name: "mgrID",
//     message: "Please enter your ID number",
//   },
//   {
//     type: "input",
//     name: "mgrEmail",
//     message: "Please enter your email",
//   },
//   {
//     type: "input",
//     name: "offNum",
//     message: "Please enter your office phone number",
//   },
//   {
//     type: "list",
//     name: "role",
//     message: "Would you like to add anyone to your team?",
//     choices: ["Engineer", "Intern", "No one else to add"],
//     askAnswered: true,
//   },
//   {
//     type: "input",
//     name: "engName",
//     message: "Please enter your engineers name",
//     askAnswered: true,
//     when: function (answers) {
//       return answers.role === "Engineer";
//     },
//   },
//   {
//     type: "input",
//     name: "engID",
//     message: "Please enter your engineers ID number",
//     askAnswered: true,
//   },
//   {
//     type: "input",
//     name: "engEmail",
//     message: "Please enter your engineers email",
//     askAnswered: true,
//   },
//   {
//     type: "input",
//     name: "gitHub",
//     message: "Please enter your engineers GitHub username",
//     askAnswered: true,
//   },
//   {
//     type: "list",
//     name: "role",
//     message: "Would you like to add anyone to your team?",
//     choices: ["Engineer", "Intern", "No one else to add"],
//     askAnswered: true,
//   },
// ];

// addTeamMate = (role) => {
//   switch (answers.choices) {
//     case "Engineer":
//       response = newEngineer();
//       break;
//     case "Intern":
//       response = newIntern();
//       break;
//     case "No one else to add":
//       response = "";
//       break;
//   }
//   return answers[role];
// };

function init() {
  console.log("Please build your team");
  newManager();
  //   inquirer
  //     .prompt(questions)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.error(err));
}

// Function call to initialize app
init();
