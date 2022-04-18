/* //Examples for sorting the element strings of array in ascending order

//Example 1:
const myArray = ["Cat", "Apple", "Dog", "Ball"];

myArray.sort();

console.log(myArray); // [ 'Apple', 'Ball', 'Cat', 'Dog' ]

//Example 2:

const myArrayOther = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther.sort();

console.log(myArrayOther); //[ 'Nivi', 'Rahul', 'Tony', 'Vikram' ]

//Example 3:

const myArrayOtherMixed = ["rahul", "vikram", "Nivi", "Tony", "Kriti", "jack"];

myArrayOtherMixed.sort();

console.log(myArrayOtherMixed); //[ 'Kriti', 'Nivi', 'Tony', 'jack', 'rahul', 'vikram' ]

//Example for sorting the element strings of array in descending order

// Example 1
const array = ["Cat", "Apple", "Dog", "Ball"];

array.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(array);

// Example 2

const arrayOther = ["Rahul", "Vikram", "Nivi", "Tony"];

arrayOther.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arrayOther); //[ 'Vikram', 'Tony', 'Rahul', 'Nivi' ]

// Example 3

const arrayOtherMixed = ["rahul", "vikram", "Nivi", "Tony", "Kriti", "jack"];

arrayOtherMixed.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arrayOtherMixed); //[ 'vikram', 'rahul', 'jack', 'Tony', 'Nivi', 'Kriti' ]
//Examples for sorting the element strings of array in descending order using reverse function

//Example 1
const myArray1 = ["Cat", "Apple", "Dog", "Ball"];

myArray1.sort().reverse();

console.log(myArray1); //[ 'Dog', 'Cat', 'Ball', 'Apple' ]

// Example 2

const myArrayOther1 = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther1.sort().reverse();

console.log(myArrayOther1); //[ 'Vikram', 'Tony', 'Rahul', 'Nivi' ]

// Example 3

const myArrayOtherMixed1 = ["rahul", "vikram", "Nivi", "Tony", "Kriti", "jack"];

myArrayOtherMixed1.sort().reverse();

console.log(myArrayOtherMixed1); //[ 'vikram', 'rahul', 'jack', 'Tony', 'Nivi', 'Kriti' ] */

//Example for sorting the element numbers of array directly with sort.
/* 
let myNumbersArray = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];
myNumbersArray.sort();
console.log(myNumbersArray); //[1, 10, 11, 2, 33, 45, 65, 7, 8, 99];

//Examples for sorting the numerical element of array in ascending order

//Example 1

let myNumbersArray1 = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];

myNumbersArray1.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(myNumbersArray1); //[1, 2, 7, 8, 10, 11, 33, 45, 65, 99]

//Example 2

let myNumbersArray2 = [
  -87, -65, -98, -55, 0, 25, -56, 2, 95, 35, -52, 99, -39, 98, -258, 308,
];

myNumbersArray2.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(myNumbersArray2); */
//[-258, -98, -87, -65, -56, -55, -52, -39, 0, 2, 25, 35, 95, 98, 99, 308];

//Examples for sorting the numerical element of array in descending order

//Example 1

/* let myNumbersArray3 = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];

myNumbersArray3.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(myNumbersArray3); //[99, 65, 45, 33, 11, 10, 8, 7, 2, 1];

//Example 2

let myNumbersArray4 = [
  -87, -65, -98, -55, 0, 25, -56, 2, 95, 35, -52, 99, -39, 98, -258, 308,
];

myNumbersArray4.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(myNumbersArray4);
//[308, 99, 98, 95, 35, 25, 2, 0, -39, -52, -55, -56, -65, -87, -98, -258]; */

//Examples for sorting the numerical element of array in descending order using reverse function

//Example 1
let myNumbersArray5 = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];

myNumbersArray5.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
myNumbersArray5.reverse();
console.log(myNumbersArray5); //[99, 65, 45, 33, 11, 10, 8, 7, 2, 1]

let myNumbersArray6 = [
  -87, -65, -98, -55, 0, 25, -56, 2, 95, 35, -52, 99, -39, 98, -258, 308,
];

//Example 6
myNumbersArray6.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
});
myNumbersArray6.reverse();
console.log(myNumbersArray6);
//[308, 99, 98, 95, 35, 25, 2, 0, -39, -52, -55, -56, -65, -87, -98, -258]
