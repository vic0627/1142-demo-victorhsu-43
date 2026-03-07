interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}
const deepWork: Book = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  // printSomething: function (someValue) {
  // return someValue;
  // },
  // second option
  printSomething: (someValue) => {
    // "this" gotcha
    console.log(deepWork.author);
    return someValue;
  },
  // third option
  // printSomething(someValue) {
  // return someValue;
  // },
  // alternative
  // printAuthor: () => {
  // console.log(deepWork.author);
  // },
};
console.log(deepWork.printSomething(34));
deepWork.printAuthor();
const result = deepWork.printTitle("is an awesome book");
console.log(result);

interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}
const laptop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};
laptop.storage = 512; // assigning value to optional property
console.log("ram_43", laptop.upgradeRam(8)); // upgrades RAM by 4GB
console.log("laptop_43", laptop);
