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
      //should I limit a max length for input?
    });
    it("should set email based off user input from question prompt", () => {
      const email = "yourEmail@gmail.com";
      const emp = new Employee("Natalie", 234, email);

      expect(emp.email).toEqual(email);
    });
  });
  //   describe("getID", () => {
  //     it("should set id based off user input from question prompt", () => {
  //       const emp = new Employee(id);
  //       const id = 123;
  //       expect(emp.id).toEqual(id);
  //       //should I limit a max length for input?
  //     });
  //   });
  //   describe("getEmail", () => {
  //     it("should set email based off user input from question prompt", () => {
  //       const emp = new Employee(email);
  //       const email = "yourEmail@gmail.com";
  //       expect(emp.email).toEqual(email);
  //     });
  //   });
  //   describe("getRole", () => {
  //     it("should set email based off user input from question prompt", () => {
  //       const role = "Employee";
  //       const emp = new Employee("Natalie", 123, "someEmail@gmail.com");
  //       expect(emp).toEqual(role);
  //     });
  //   });
});
