//how do I get the role added?

//const Manager = require("./Lib/manager");

//     if (`${emp.officeNumber}`) {
//       $("<li></li>")
//         .addClass("list-group-item")
//         .appendTo(empInfo)
//         .text(`Office Num:${emp.officeNumber}`);
//     } else if (`${emp.github}`) {
//       $("<li></li>")
//         .addClass("list-group-item")
//         .appendTo(empInfo)
//         .text(`Github:${emp.github}`);
//     } else if (`${emp.school}`) {
//       $("<li></li>")
//         .addClass("list-group-item")
//         .appendTo(empInfo)
//         .text(`School:${emp.school}`);
//     }
//   });
// };

const generateHTML2 = (allEmployees) => {
  console.log(allEmployees);
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
        <head>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </head>
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
        <div class="container">`;

  allEmployees.forEach((emp) => {
    html += `   <div class="card" style="width: 18rem">
<div class="card-header">Featured</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Name: ${emp.name}</li>
  <li class="list-group-item">Email: ${emp.email}</li>
  <li class="list-group-item">Emp ID: ${emp.id}</li>
</ul>
</div>`;
  });
  html += `   </div>

        
      </body>
    </html>`;
  return html;
};

module.exports = generateHTML2;
