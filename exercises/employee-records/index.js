var employees = [];

// set with default parameter value of "Full Time"
function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
}

var briana = new Employee("Briana Sykes", "Chef", "$25/hr", "Part Time");
var steven = new Employee("Steven Jones", "Professor", "$1 million/year");
var marissa = new Employee("Marissa Nielsen", "Editing Assistant", "$70,000/year");

briana.printEmployeeForm();
steven.printEmployeeForm();
marissa.printEmployeeForm();

employees.push(briana, steven, marissa);
console.log(employees);
