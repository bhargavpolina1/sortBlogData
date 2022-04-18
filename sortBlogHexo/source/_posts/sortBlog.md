---
title: Sort Function
---

- The sort() function sorts the elements of an array as strings in alphabetical and ascending order and then returns the sorted array.

- The sort() function overwrites the original array.

**Syntax:** array.sort()

## Sort Function on Array of Strings in Ascending Order:

- The sort() function when executed on array of strings will return a sorted array of strings in alphabetical-ascending order as in the below examples:

**Example 1:**

```javascript
const myArray = ["Cat", "Apple", "Dog", "Ball"];

myArray.sort();

console.log(myArray); //[ 'Apple', 'Ball', 'Cat', 'Dog' ]
```

**Example 2:**

```javascript
const myArrayOther = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther.sort();

console.log(myArrayOther); //[ 'Nivi', 'Rahul', 'Tony', 'Vikram' ];
```

**Example 3:**

```javascript
const myArrayOtherMixed = ["rahul", "vikram", "Nivi", "Tony", "Kriti", "jack"];

myArrayOtherMixed.sort();

console.log(myArmyArrayOtherMixedrayOther); //[ 'Nivi', 'Rahul', 'Tony', 'Vikram' ];
```

## Sort Function on Array of Strings in Descending Order:

- The sort() function sorts the array element strings in alphabetical-ascending order. But if the requriment is to sort them in a descending order, a compare function is to be passed to the sort function as in the below examples:

**Example 1:**

```javascript
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

console.log(array); //[ 'Dog', 'Cat', 'Ball', 'Apple' ]
```

**Example 2:**

```javascript
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
```

**Example 3:**

```javascript
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
```

## Sort Function on Array of Strings in Descending Order Using Reverse Function:

- Sorting of array element strings in descending order can be also achieved by chaining the sort function with reverse function (which reverses the order of the elements in an array overwriting the original array) as in the below examples:

**Example 1:**

```javascript
const myArray1 = ["Cat", "Apple", "Dog", "Ball"];

myArray1.sort().reverse();

console.log(myArray1); // [ 'Dog', 'Cat', 'Ball', 'Apple' ]
```

**Example 2:**

```javascript
const myArrayOther1 = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther1.sort().reverse();

console.log(myArrayOther1); //[ 'Vikram', 'Tony', 'Rahul', 'Nivi' ]
```

**Example 3:**

```javascript
const myArrayOtherMixed1 = ["rahul", "vikram", "Nivi", "Tony", "Kriti", "jack"];

myArrayOtherMixed1.sort().reverse();

console.log(myArrayOtherMixed1); //[ 'vikram', 'rahul', 'jack', 'Tony', 'Nivi', 'Kriti' ]
```

## Sort Function on Array of Numbers:

- Let us apply the sort function on an array of numbers and check what it returns.

**Example:**

```javascript
let myNumbersArray = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];
myNumbersArray.sort();
console.log(myNumbersArray); //[1, 10, 11, 2, 33, 45, 65, 7, 8, 99];
```

- If we check the output of the above program, 10 and 11 returned before 2 even though they are greater than 2. Why did this happen? Because if no function to compare is provided to the sort function,all non-undefined array elements are sorted by converting them into strings and comparing their sequences of UTF-16 code units values.

- In the above example, even though the elements are numerical values, as there is no compare fuction provided to the sort function, all the numerical are converted into strings and then compared to their sequences of UTF-16 code units values. so, 10 and 11 returned before 2 and 65 returned before 7 and 8.

- This issue can be sorted by providing a compare function to the sort function.

## Sort Function on Array of Numbers in Ascending Order:

- As explained above, in order to sort the numerical elements of an array, a compare function is to be provided to the sort function. Below are some examples to sort the numbers array in ascending order.

**Example 1:**

```javascript
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
```

**Example 2:**

```javascript
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

console.log(myNumbersArray2);
//[-258, -98, -87, -65, -56, -55, -52, -39, 0, 2, 25, 35, 95, 98, 99, 308];
```

## Sort Function on Array of Numbers in Descending Order:

Below are some examples to sort the numbers array in descending order by providing a compare function to sort function.

**Example 1:**

```javascript
let myNumbersArray3 = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];

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
```

**Example 2:**

```javascript
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
//[308, 99, 98, 95, 35, 25, 2, 0, -39, -52, -55, -56, -65, -87, -98, -258];
```

## Sort Function on Array of Numbers in Descending Order Using Reverse Function:

- Sorting of array with numerical elements in descending order can be also achieved by the sort function (provided with compare function) which sorts the array in ascending order and then chaining it with reverse function which reverses the order of the elements in the array overwriting the original array. Below are few examples.

**Example 1:**

```javascript
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
```

**Example 2:**

```javascript
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
```
