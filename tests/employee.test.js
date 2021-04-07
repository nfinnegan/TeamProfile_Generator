const Employee = require("../Lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should instantiate a new Employee class", () => {
      const emp = new Employee();
      expect(emp).toEqual({
        name: "Natalie",
        id: 1234,
        email: "someEmail@gmail.com",
      });
    });
  });
  describe("getName", () => {
    it("should set name based off user input from question prompt", () => {
      const emp = new Employee(name);
      const name = "Natalie";
      expect(emp).toEqual(name);
    });
  });
  describe("getID", () => {
    it("should set id based off user input from question prompt", () => {
      const emp = new Employee(id);
      const id = 123;
      expect(emp).toEqual(id);
      //should I limit a max length for input?
    });
  });
  describe("getEmail", () => {
    it("should set email based off user input from question prompt", () => {
      const emp = new Employee(email);
      const email = "yourEmail@gmail.com";
      expect(emp).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should set email based off user input from question prompt", () => {
      const role = "Employee";
      const emp = new Employee("Natalie", 123, "someEmail@gmail.com");
      expect(emp).toEqual(role);
    });
  });
});
