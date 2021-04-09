generateHTML = (allEmployees) => {
  for (emp in allEmployees) {
    let empRole = $("<div></div>")
      .addClass("card-header")
      .appendTo(".container");
    let empInfo = $("<ul></ul>")
      .addClass("list-group list-group-flush")
      .appendTo(empRole);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text(`${data.name}`);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text(`${data.id}`);
    $("<li></li>")
      .addClass("list-group-item")
      .appendTo(empInfo)
      .text(`${data.email}`);
    if (`${data.officeNumber}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text(`${data.officeNumber}`);
    } else if (`${data.github}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text(`${data.github}`);
    } else if (`${data.school}`) {
      $("<li></li>")
        .addClass("list-group-item")
        .appendTo(empInfo)
        .text(`${data.school}`);
    }
  }
};

module.exports = generateHTML;
