function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}
sayHi("john");
// sayHi(3)
// sayHi('peter', 'random');
function calculateDiscount(price: number): number {
  // price.toUpperCase();
  const hasDiscount = true;
  if (hasDiscount) {
    return price;
    // return 'Discount Applied';
  }
  return price * 0.9;
}
const finalPrice = calculateDiscount(200);
console.log(finalPrice);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  let total = doubled.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}
let result = sum("The total is:", 1, 2, 3, 4, 5); // result will be "The total is: 15"
console.log(result);

function createEmployee({ id }: { id: number }): {
id: number;
isActive: boolean;
} {
return { id, isActive: id % 2 === 0 };
}
const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative
function createStudent(student: { id: number; name: string }) {
console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}
const newStudent = {
id: 5,
name: 'anna',
};
createStudent(newStudent);