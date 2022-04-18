//Examples for sorting the element strings of array in ascending order

//Example 1:
const myArray = ["Cat", "Apple", "Dog", "Ball"];

myArray.sort();

console.log(myArray); // [ 'Apple', 'Ball', 'Cat', 'Dog' ]

//Example 2:

const myArrayOther = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther.sort();

console.log(myArrayOther); //[ 'Nivi', 'Rahul', 'Tony', 'Vikram' ]
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

//Examples for sorting the element strings of array in descending order using reverse function

//Example 1
const myArray1 = ["Cat", "Apple", "Dog", "Ball"];

myArray1.sort().reverse();

console.log(myArray1); //[ 'Dog', 'Cat', 'Ball', 'Apple' ]

// Example 2

const myArrayOther1 = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther1.sort().reverse();

console.log(myArrayOther1); //[ 'Vikram', 'Tony', 'Rahul', 'Nivi' ]
