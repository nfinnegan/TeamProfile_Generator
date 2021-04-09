const Intern = require("../Lib/intern");

describe("school name", () => {
  it("should set school name based off of user input from question prompt", () => {
    const school = "university of illinois";
    const intern = new Intern("Natalie", 456, "test@gmail.com", school);
    expect(intern.school).toEqual(school);
  });
});

describe("getRole", () => {
  it("should get employee type ", () => {
    const roleType = "Intern";
    const intern = new Intern(
      "Natalie",
      123,
      "someEmail@gmail.com",
      "university of Illinois"
    );
    expect(intern.getRole()).toBe(roleType);
  });
});

describe("getSchool", () => {
  it("should get school name from object", () => {
    const school = "harvard university";
    const intern = new Intern("Natalie", 123, "someEmail@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
  });
});
