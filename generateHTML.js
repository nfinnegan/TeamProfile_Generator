//how do I get the role added?
const jQuery = require("jquery");

generateHTML = (allEmployees) => {
  for (emp in allEmployees) {
    let card = $("<div></div>").addClass("card").appendTo(".container");
    let empRole = $("<div></div>").addClass("card-header").appendTo(card);
    let empInfo = $("<ul></ul>")
      .addClass("list-group list-group-flush")
      .appendTo(empRole);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text("Name:"`${data.name}`);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text("Emp ID:"`${data.id}`);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text("Email:"`${data.email}`);
    if (`${data.officeNumber}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text("Office Num:"`${data.officeNumber}`);
    } else if (`${data.github}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text("Github:"`${data.github}`);
    } else if (`${data.school}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text("School:"`${data.school}`);
    }
  }
};

module.exports = generateHTML;
