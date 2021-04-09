const Manager = require("../Lib/manager");

describe("office number", () => {
  it("should set office number based off of user input from question prompt", () => {
    const officeNumber = 7733345656;
    const mgr = new Manager("Natalie", 456, "test@gmail.com", officeNumber);
    expect(mgr.officeNumber).toEqual(officeNumber);
  });
});

describe("getRole", () => {
  it("should get employee type ", () => {
    const roleType = "Manager";
    const mgr = new Manager("Natalie", 123, "someEmail@gmail.com", 7731235757);
    expect(mgr.getRole()).toBe(roleType);
  });
});
