const Manager = require("./Lib/manager");

//creates new empty array for the each "Created Card" in the for loop to be pushed through once information is set in each
const teamCards = [];

//takes allEmployees array of objects generated from user input and loops through
//to pull data based on ROLE type in order to create cards to render on HTML
const createCards = (allEmployees) => {
  for (let i = 0; i < allEmployees.length; i++) {
    if (allEmployees[i].getRole() === "Manager") {
      teamCards.push(`<div class="card col-sm-12 col-md-3 col-lg-3" style="width: 18rem">
    <div class="card-header">Role:<i class="fas fa-chalkboard-teacher"></i> ${allEmployees[
      i
    ].getRole()}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${allEmployees[i].name}</li>
      <li class="list-group-item">Email: <a target="_blank" href="mailto:${
        allEmployees[i].email
      }">${allEmployees[i].email}</a></li>
      <li class="list-group-item">Emp ID: ${allEmployees[i].id}</li>
      <li class="list-group-item">Emp Office #: ${
        allEmployees[i].officeNumber
      }</li>
    </ul>
    </div>`);
    } else if (allEmployees[i].getRole() === "Engineer") {
      teamCards.push(`<div class="card col-sm-12 col-md-3 col-lg-3" style="width: 18rem">
    <div class="card-header">Role:<i class="fas fa-laptop-code"></i> ${allEmployees[
      i
    ].getRole()}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${allEmployees[i].name}</li>
      <li class="list-group-item">Email: <a target="_blank" href="mailto:${
        allEmployees[i].email
      }">${allEmployees[i].email}</a></li>
      <li class="list-group-item">Emp ID: ${allEmployees[i].id}</li>
      <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${
        allEmployees[i].github
      }">${allEmployees[i].github}</a></li>
    </ul>
    </div>`);
    } else if (allEmployees[i].getRole() === "Intern") {
      teamCards.push(`<div class="card col-sm-12 col-md-3 col-lg-3" style="width: 18rem">
      <div class="card-header">Role:<i class="fas fa-graduation-cap"></i> ${allEmployees[
        i
      ].getRole()}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${allEmployees[i].name}</li>
        <li class="list-group-item">Email: <a target="_blank" href="mailto:${
          allEmployees[i].email
        }">${allEmployees[i].email}</a></li>
        <li class="list-group-item">Emp ID: ${allEmployees[i].id}</li>
        <li class="list-group-item">School: ${allEmployees[i].school}</li>
      </ul>
      </div>`);
    }
  }
  let html = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>My Team</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 text-center bg-dark" style="color: white">
              My Team
            </h1>
          </div>
        </div>
      </header>
      <div class="container">
      <div class="row">
${teamCards.join(" ")}
</div>

    </body>
  </html>`;
  return html;
};

module.exports = createCards;
