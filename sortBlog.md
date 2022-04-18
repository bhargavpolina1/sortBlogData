# Sort Function:

- The sort() function sorts the elements of an array as strings in alphabetical and ascending order and then returns the sorted array.

- The sort() function overwrites the original array.

**Syntax:** array.sort()

## Sort Function on Array of Strings in Ascending Order:

- The sort() function when executed on array of strings will return a sorted array of strings in alphabetical-ascending order as in the below examples:

**Example 1**:

```javascript
const myArray = ["Cat", "Apple", "Dog", "Ball"];

myArray.sort();

console.log(myArray); //[ 'Apple', 'Ball', 'Cat', 'Dog' ]
```

**Example 2**:

```javascript
const myArrayOther = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther.sort();

console.log(myArrayOther); //[ 'Nivi', 'Rahul', 'Tony', 'Vikram' ];
```

## Sort Function on Array of Strings in Descending Order:

- The sort() function sorts the array element strings in alphabetical-ascending order. But if the requriment is to sort them in a descending order, a function is to be passed to the sort function as in the below examples:

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

## Sort Function on Array of Strings in Descending Order Using Reverse Function:

- Sorting of array element strings in descending order can be also achieved by chaining the sort function with reverse function (which reverses the order of the elements in an array overwriring the original array) as in the below examples:

**Example 1**:

```javascript
const myArray1 = ["Cat", "Apple", "Dog", "Ball"];

myArray1.sort().reverse();

console.log(myArray1); // [ 'Dog', 'Cat', 'Ball', 'Apple' ]
```

**Example 2**:

```javascript
const myArrayOther1 = ["Rahul", "Vikram", "Nivi", "Tony"];

myArrayOther1.sort().reverse();

console.log(myArrayOther1); //[ 'Vikram', 'Tony', 'Rahul', 'Nivi' ]
```
