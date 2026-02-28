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