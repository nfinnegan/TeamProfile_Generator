//how do I get the role added?
const jQuery = require("jquery");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

generateHTML = (allEmployees) => {
  console.log("generateHTML line 8:", allEmployees);
  return allEmployees.forEach((emp) => {
    let card = $("<div></div>").addClass("card").appendTo(".container");
    let empRole = $("<div></div>").addClass("card-header").appendTo(card);
    let empInfo = $("<ul></ul>")
      .addClass("list-group list-group-flush")
      .appendTo(empRole);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text(`Name:${emp.name}`);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text(`Emp ID:${emp.id}`);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text(`Email:${emp.email}`);
    if (`${emp.officeNumber}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text(`Office Num:${emp.officeNumber}`);
    } else if (`${emp.github}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text(`Github:${emp.github}`);
    } else if (`${emp.school}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text(`School:${emp.school}`);
    }
  });
};

//   )

//   {
//       console.log(emp);

//     }

module.exports = generateHTML;
