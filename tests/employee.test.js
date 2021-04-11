const Employee = require("../Lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should instantiate a new Employee class", () => {
      const emp = new Employee();
      expect(typeof emp).toBe("object");
    });

    it("should set name based off user input from question prompt", () => {
      const name = "Natalie";
      const emp = new Employee(name);
      expect(emp.name).toEqual(name);
    });
    it("should set id based off user input from question prompt", () => {
      const id = 123;
      const emp = new Employee("Natalie", id);
      expect(emp.id).toEqual(id);
    });
    it("should set email based off user input from question prompt", () => {
      const email = "yourEmail@gmail.com";
      const emp = new Employee("Natalie", 234, email);
      expect(emp.email).toEqual(email);
    });
  });
  describe("getID", () => {
    it("should get ID from object", () => {
      const id = 567;
      const emp = new Employee("Ashley", id);
      expect(emp.getID()).toBe(id);
    });
  });
  describe("getEmail", () => {
    it("should get email from object", () => {
      const email = "yourEmail@gmail.com";
      const emp = new Employee("Ashley", 789, email);
      expect(emp.getEmail()).toBe(email);
    });
  });
  describe("getName", () => {
    it("should get name from object", () => {
      const name = "Ashley";
      const emp = new Employee(name, 789, "yourEmail@gmail.com");
      expect(emp.getName()).toBe(name);
    });
  });
  describe("getRole", () => {
    it("should get employee type ", () => {
      const roleType = "Employee";
      const emp = new Employee("Natalie", 123, "someEmail@gmail.com");
      expect(emp.getRole()).toBe(roleType);
    });
  });
});
