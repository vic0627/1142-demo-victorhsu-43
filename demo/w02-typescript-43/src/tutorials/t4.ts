type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const alice: Employee = {
  id: 1,
  name: "Alice",
  department: "Sales",
};
const steve: Employee = {
  id: 1,
  name: "Steve",
  department: "HR",
};
const victor: Manager = {
  id: 2,
  name: "Victor",
  employees: [alice, steve],
};

function printStaffDetails(staff: Staff) {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`,
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`,
    );
  }
}

console.log("alice", alice);
console.log("steve", steve);
console.log("victor", victor);
printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(victor);
