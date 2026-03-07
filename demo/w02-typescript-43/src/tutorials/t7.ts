interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Victor",
  getValue: function () {
    return this.value;
  },
};

console.log("genericString", genericString);

async function someFunc(): Promise<string> {
  return "Hello, World!";
}
const result = someFunc();
console.log("result_43", result);

function createArray<T>(length: number, value: T): T[] {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}
let arrayString = createArray<string>(3, "Hello");
let arrayNumber = createArray<number>(4, 100);
console.log("arrayString", arrayString);
console.log("arrayNumber", arrayNumber);
