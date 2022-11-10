console.log("this is a event");
const body = document.body;
body.append("hellow world, ramon", " bye bro");
const divMain = document.createElement("div");
divMain.innerText = "Hey Ray";
divMain.textContent = "Dreams nerver die";
divMain.innerHTML = "<h1>This is raymond working hard</h1>";
body.append(divMain);

const spanHome = document.querySelector("#home");
const spanTask = document.querySelector("#task");
console.log(spanHome, spanTask, "duro");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numbersStrings = ["1", "2", "3", "4", "5"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "c", "a"];
const participans = ["Raymond", "Sergio", "Jose", "Carlos"];
const mapItems = [
  {
    name: "Ray",
    age: 39,
    price: 1000,
    count: 7,
  },
  {
    name: "Joe",
    age: 43,
    price: 900,
    count: 6,
  },
  {
    name: "Martin",
    age: 59,
    price: 800,
    count: 5,
  },
  {
    name: "Charls",
    age: 60,
    price: 900,
    count: 4,
  },
];

let count = {};
// forEach give three paramatres the value, index and the array

numbers.forEach((item, index, array) => {
  console.log(item, `a[${index}] = ${item} lopping: ${array}`);
});
let sum = 0;
numbers.forEach((item, index, array) => {
  sum += item;
});
console.log(sum, "the sum");

numbers.forEach((item, index, array) => {
  sum += item;
});

letters.forEach((item, index, array) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count, "counting here");

// MAP every elements from an array and return and array

const times = numbers.map((value, index) => {
  return value * 2;
});
const mappingNames = mapItems.map((item, index) => ({
  name: item.name,
  totalValue: item.count * item.price,
}));
const arrayOfNumber = numbersStrings.map(Number);
console.log(
  times,
  "times number 2",
  mappingNames,
  "array of numbers:",
  arrayOfNumber
);

//FILTER return a falsy value, teste item inside the array and if not found it keepo forward

const even = numbers.filter((value) => value % 2 === 0);

const personIs = mapItems.filter((value) => value.age > 50);
const numbersFilters = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(even, "values here", personIs, "filtering", numbersFilters);

//REDUCE call back fn every elements on the array and return one single value

const totalReduce = numbers.reduce((accum, value, index, arr) => {
  return accum + value;
}, 0);
const maxReduce = numbers.reduce((accum, value, index, arr) => {
  if (accum > value) {
    return accum;
  } else {
    return value;
  }
}, -Infinity);

const arrayReduce = mapItems.reduce(
  (accum, value) => accum + value.price * value.count,
  0
);
const arrayProdcut = mapItems.reduce(
  (accum, value) => [accum + value.name],
  []
);
console.log(
  totalReduce,
  "redcue simple fn:",
  maxReduce,
  "damm:",
  arrayReduce,
  "studying as a good guy:",
  arrayProdcut
);

//SLICE this is an array
const numbersSlice = numbers.slice(-4);
const slicePArticipans = participans.slice(0, 3);
console.log(numbersSlice, "slicing", slicePArticipans);

//SPLICE replacing existying elements from the array

const numberSplice = numbers.splice(9, 0, 10, 11);
console.log(numberSplice, "sliping", numbers);
