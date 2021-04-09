const Engineer = require("../Lib/engineer");

describe("github username", () => {
  it("should set GitHub username based off of user input from question prompt", () => {
    const github = "nfinnegan";
    const eng = new Engineer("Natalie", 456, "test@gmail.com", github);
    expect(eng.github).toEqual(github);
  });
});

describe("getRole", () => {
  it("should get employee type ", () => {
    const roleType = "Engineer";
    const eng = new Engineer(
      "Natalie",
      123,
      "someEmail@gmail.com",
      "nfinnegan"
    );
    expect(eng.getRole()).toBe(roleType);
  });
});

describe("getGithub", () => {
  it("should get github username from object", () => {
    const github = "nfinnegan";
    const eng = new Engineer("Natalie", 123, "someEmail@gmail.com", github);
    expect(eng.getGithub()).toBe(github);
  });
});
