type User = { id: number; name: string; isActive: boolean };
const john2: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan2: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser2_43(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

console.log("createUser2_43", createUser2_43(john2));
console.log("createUser2_43", createUser2_43(susan2));
