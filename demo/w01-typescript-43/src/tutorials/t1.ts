console.log("t1.ts is running");

// #region Type Annotations
let awesomeName: string = "shakeAndBake";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;

let amount: number = 12;
amount = 12 - 1;
// amount = 'pants';

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';

console.log(awesomeName, amount, isAwesome);
// #endregion

// #region Union Type
let tax: number | string = 10;
tax = 100;
tax = '$10';
// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
requestStatus = 'random';
console.log(tax, requestStatus);
// #endregion

let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';
let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };
let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property.

console.log(items);
