---
title: Sort Function
---

- The `sort()` function sorts the elements of an array as strings in alphabetical and ascending order and then returns the sorted array.

- The `sort()` function overwrites the original array.

**Syntax:** array.sort()

## Sort Function on Array of Strings in Ascending Order:

- The `sort()` function when executed on array of strings will return a sorted array of strings in alphabetical order as in the below examples:

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

- The `sort()` function sorts the array element strings in alphabetical order. But if the requriment is to sort them in a descending order, a compare function is to be passed to the `sort()` function as in the below examples:

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

- Sorting of array element strings in descending order can be also achieved by chaining the `sort()` function with `reverse()` function (which reverses the order of the elements in an array overwriting the original array) as in the below examples:

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

- Let us apply the `sort()` function on an array of numbers and check what it returns.

**Example:**

```javascript
let myNumbersArray = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];
myNumbersArray.sort();
console.log(myNumbersArray); //[1, 10, 11, 2, 33, 45, 65, 7, 8, 99];
```

- If we check the output of the above program, 10 and 11 returned before 2 even though they are greater than 2. Why did this happen? Because if no function to compare is provided to the `sort()` function, all non-undefined array elements are sorted by converting them into strings and comparing their sequences of UTF-16 code units values.

- In the above example, even though the elements are numerical values, as there is no compare fuction provided to the `sort()` function, all the numericals are converted into strings and then compared to their sequences of UTF-16 code units values. So, 10 and 11 returned before 2 and 65 returned before 7 and 8.

- This issue can be sorted by providing a compare function to the `sort()` function.

## Sort Function on Array of Numbers in Ascending Order:

- As explained above, in order to sort the numerical elements of an array, a compare function is to be provided to the `sort()` function. Below are some examples to sort the numbers array in ascending order.

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

Below are some examples to sort the numbers array in descending order by providing a compare function to `sort()` function.

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

- Sorting of array with numerical elements in descending order can be also achieved by the `sort()` function (provided with compare function) which sorts the array in ascending order and then chaining it with `reverse()` function which reverses the order of the elements in the array overwriting the original array. Below are few examples.

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

## Sort Function on Array of Objects:

- The `sort()` function (provided with a compare function) when executed on array of objects will return a sorted array of objects by the values of the object’s properties.

## Sort Function on Array of Objects Sorted in Ascending Order:

- Let us understand the usage of `sort()` function in sorting the array of objects in ascending order with some examples.

**Example 1:**

```javascript
const myArrayOfObjects = [
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];

myArrayOfObjects.sort((a, b) => {
  return a.Latitude - b.Latitude;
});

console.log(myArrayOfObjects);
```

Below is the sorted array `myArrayOfObjects` in ascending order of `Latitude`:

```javascript
[
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];
```

**Example 2**

```javascript
const myArrayOfObjects1 = [
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];

myArrayOfObjects1.sort((a, b) => {
  return a.Longitude - b.Longitude;
});

console.log(myArrayOfObjects1);
```

Below is the sorted array `myArrayOfObjects1` in ascending order of `Longitude`:

```javascript
[
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
];
```

## Example 3:

```javascript
let myArrayOfObjects2 = [
  {
    Year: 2012,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2016,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2013,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2015,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2020,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2007,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 1996,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];

myArrayOfObjects2.sort((a, b) => {
  return a.Year - b.Year;
});

console.log(myArrayOfObjects2);
```

Below is the sorted array `myArrayOfObjects2` in ascending order of `Year`:

```javascript
[
  {
    Year: 1996,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
  {
    Year: 2007,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2012,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2013,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2015,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2016,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2020,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
];
```

## Sort Function on Array of Objects Sorted in Descending Order:

- Let us understand the usage of `sort()` function in sorting the array of objects in descending order with some examples.

**Example 1:**

```javascript
const myArrayOfObject3 = [
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];

myArrayOfObjects3.sort((a, b) => {
  return b.Latitude - a.Latitude;
});

console.log(myArrayOfObjects3);
```

Below is the sorted array `myArrayOfObjects3` in descending order of `Latitude`:

```javascript
[
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
];
```

**Example 2**

```javascript
const myArrayOfObjects4 = [
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];

myArrayOfObjects4.sort((a, b) => {
  return b.Longitude - a.Longitude;
});

console.log(myArrayOfObjects4);
```

Below is the sorted array `myArrayOfObjects4` in descending order of `Longitude`:

```javascript
[
  {
    Year: 2018,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2018,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2018,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
  {
    Year: 2018,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2018,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 2018,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
];
```

## Example 3:

```javascript
let myArrayOfObjects5 = [
  {
    Year: 2012,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2016,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2013,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2015,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2020,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2007,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 1996,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];

myArrayOfObjects5.sort((a, b) => {
  return b.Year - a.Year;
});

console.log(myArrayOfObjects5);
```

Below is the sorted array `myArrayOfObjects5` in descending order of `Year`:

```javascript
[
  {
    Year: 2020,
    Ranking: 6,
    Name: "Central",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.043,
    Longitude: -77.028,
  },
  {
    Year: 2018,
    Ranking: 2,
    Name: "El Celler de Can Roca",
    City: "Girona",
    Country: "Spain",
    Latitude: 41.9808,
    Longitude: 2.8187,
  },
  {
    Year: 2016,
    Ranking: 3,
    Name: "Mirazur",
    City: "Menton",
    Country: "France",
    Latitude: 43.7747,
    Longitude: 7.5046,
  },
  {
    Year: 2015,
    Ranking: 5,
    Name: "Gaggan",
    City: "Bangkok",
    Country: "Thailand",
    Latitude: 13.75,
    Longitude: 100.516,
  },
  {
    Year: 2013,
    Ranking: 4,
    Name: "Eleven Madison Park",
    City: "New York",
    Country: "USA",
    Latitude: 40.7146,
    Longitude: -74.0071,
  },
  {
    Year: 2012,
    Ranking: 1,
    Name: "Osteria Francescana",
    City: "Modena",
    Country: "Italy",
    Latitude: 44.6431,
    Longitude: 10.9341,
  },
  {
    Year: 2007,
    Ranking: 7,
    Name: "Maido",
    City: "Lima",
    Country: "Peru",
    Latitude: -12.048,
    Longitude: -77.024,
  },
  {
    Year: 1996,
    Ranking: 8,
    Name: "Arpège",
    City: "Paris",
    Country: "France",
    Latitude: 48.8569,
    Longitude: 2.3412,
  },
];
```

## Sort Function on Array of Objects in Descending Order Using Reverse Function:

- Sorting of array of objects in descending order can be also achieved by the `sort()` function provided with a function to return comapared values in ascending order and then chained with `reverse()` function which reverses the order of the objects in the array overwriting the original array. Below are few examples:

**Example 1:**

```javascript
const dataArray = [
  {
    Country: "AFGHANISTAN",
    Export: 21.25,
    Import: 10.7,
    "Total Trade": 31.95,
    "Trade Balance": 10.55,
    "Year(start)": 97,
    "Year(end)": 98,
  },
  {
    Country: "AFGHANISTAN",
    Export: 12.81,
    Import: 28.14,
    "Total Trade": 40.95,
    "Trade Balance": -15.33,
    "Year(start)": 98,
    "Year(end)": 99,
  },
  {
    Country: "AFGHANISTAN",
    Export: 33.2,
    Import: 21.06,
    "Total Trade": 54.26,
    "Trade Balance": 12.15,
    "Year(start)": 99,
    "Year(end)": 2000,
  },
  {
    Country: "AFGHANISTAN",
    Export: 25.86,
    Import: 26.59,
    "Total Trade": 52.45,
    "Trade Balance": -0.73,
    "Year(start)": 2000,
    "Year(end)": 2001,
  },
  {
    Country: "AFGHANISTAN",
    Export: 24.37,
    Import: 17.52,
    "Total Trade": 41.89,
    "Trade Balance": 6.85,
    "Year(start)": 2001,
    "Year(end)": 2002,
  },
  {
    Country: "AFGHANISTAN",
    Export: 60.77,
    Import: 18.46,
    "Total Trade": 79.23,
    "Trade Balance": 42.31,
    "Year(start)": 2002,
    "Year(end)": 2003,
  },
];

dataArray.sort((a, b) => {
  return a.Export - b.Export;
});
dataArray.reverse();
console.log(dataArray);
```

Below is the sorted array `dataArray` in descending order of `Export`:

```javascript
[
  {
    Country: "AFGHANISTAN",
    Export: 60.77,
    Import: 18.46,
    "Total Trade": 79.23,
    "Trade Balance": 42.31,
    "Year(start)": 2002,
    "Year(end)": 2003,
  },
  {
    Country: "AFGHANISTAN",
    Export: 33.2,
    Import: 21.06,
    "Total Trade": 54.26,
    "Trade Balance": 12.15,
    "Year(start)": 99,
    "Year(end)": 2000,
  },
  {
    Country: "AFGHANISTAN",
    Export: 25.86,
    Import: 26.59,
    "Total Trade": 52.45,
    "Trade Balance": -0.73,
    "Year(start)": 2000,
    "Year(end)": 2001,
  },
  {
    Country: "AFGHANISTAN",
    Export: 24.37,
    Import: 17.52,
    "Total Trade": 41.89,
    "Trade Balance": 6.85,
    "Year(start)": 2001,
    "Year(end)": 2002,
  },
  {
    Country: "AFGHANISTAN",
    Export: 21.25,
    Import: 10.7,
    "Total Trade": 31.95,
    "Trade Balance": 10.55,
    "Year(start)": 97,
    "Year(end)": 98,
  },
  {
    Country: "AFGHANISTAN",
    Export: 12.81,
    Import: 28.14,
    "Total Trade": 40.95,
    "Trade Balance": -15.33,
    "Year(start)": 98,
    "Year(end)": 99,
  },
];
```

**Example 2:**

```javascript
const dataArray1 = [
  {
    Country: "AFGHANISTAN",
    Export: 21.25,
    Import: 10.7,
    "Total Trade": 31.95,
    "Trade Balance": 10.55,
    "Year(start)": 97,
    "Year(end)": 98,
  },
  {
    Country: "AFGHANISTAN",
    Export: 12.81,
    Import: 28.14,
    "Total Trade": 40.95,
    "Trade Balance": -15.33,
    "Year(start)": 98,
    "Year(end)": 99,
  },
  {
    Country: "AFGHANISTAN",
    Export: 33.2,
    Import: 21.06,
    "Total Trade": 54.26,
    "Trade Balance": 12.15,
    "Year(start)": 99,
    "Year(end)": 2000,
  },
  {
    Country: "AFGHANISTAN",
    Export: 25.86,
    Import: 26.59,
    "Total Trade": 52.45,
    "Trade Balance": -0.73,
    "Year(start)": 2000,
    "Year(end)": 2001,
  },
  {
    Country: "AFGHANISTAN",
    Export: 24.37,
    Import: 17.52,
    "Total Trade": 41.89,
    "Trade Balance": 6.85,
    "Year(start)": 2001,
    "Year(end)": 2002,
  },
  {
    Country: "AFGHANISTAN",
    Export: 60.77,
    Import: 18.46,
    "Total Trade": 79.23,
    "Trade Balance": 42.31,
    "Year(start)": 2002,
    "Year(end)": 2003,
  },
];

dataArray1.sort((a, b) => {
  return a.Import - b.Import;
});
dataArray1.reverse();
console.log(dataArray1);
```

Below is the sorted array `dataArray` in descending order of `Import`:

```javascript
[
  {
    Country: "AFGHANISTAN",
    Export: 12.81,
    Import: 28.14,
    "Total Trade": 40.95,
    "Trade Balance": -15.33,
    "Year(start)": 98,
    "Year(end)": 99,
  },
  {
    Country: "AFGHANISTAN",
    Export: 25.86,
    Import: 26.59,
    "Total Trade": 52.45,
    "Trade Balance": -0.73,
    "Year(start)": 2000,
    "Year(end)": 2001,
  },
  {
    Country: "AFGHANISTAN",
    Export: 33.2,
    Import: 21.06,
    "Total Trade": 54.26,
    "Trade Balance": 12.15,
    "Year(start)": 99,
    "Year(end)": 2000,
  },
  {
    Country: "AFGHANISTAN",
    Export: 60.77,
    Import: 18.46,
    "Total Trade": 79.23,
    "Trade Balance": 42.31,
    "Year(start)": 2002,
    "Year(end)": 2003,
  },
  {
    Country: "AFGHANISTAN",
    Export: 24.37,
    Import: 17.52,
    "Total Trade": 41.89,
    "Trade Balance": 6.85,
    "Year(start)": 2001,
    "Year(end)": 2002,
  },
  {
    Country: "AFGHANISTAN",
    Export: 21.25,
    Import: 10.7,
    "Total Trade": 31.95,
    "Trade Balance": 10.55,
    "Year(start)": 97,
    "Year(end)": 98,
  },
];
```

**Example 3:**

```javascript
const dataArray2 = [
  {
    Country: "AFGHANISTAN",
    Export: 21.25,
    Import: 10.7,
    "Total Trade": 31.95,
    "Trade Balance": 10.55,
    "Year(start)": 97,
    "Year(end)": 98,
  },
  {
    Country: "AFGHANISTAN",
    Export: 12.81,
    Import: 28.14,
    "Total Trade": 40.95,
    "Trade Balance": -15.33,
    "Year(start)": 98,
    "Year(end)": 99,
  },
  {
    Country: "AFGHANISTAN",
    Export: 33.2,
    Import: 21.06,
    "Total Trade": 54.26,
    "Trade Balance": 12.15,
    "Year(start)": 99,
    "Year(end)": 2000,
  },
  {
    Country: "AFGHANISTAN",
    Export: 25.86,
    Import: 26.59,
    "Total Trade": 52.45,
    "Trade Balance": -0.73,
    "Year(start)": 2000,
    "Year(end)": 2001,
  },
  {
    Country: "AFGHANISTAN",
    Export: 24.37,
    Import: 17.52,
    "Total Trade": 41.89,
    "Trade Balance": 6.85,
    "Year(start)": 2001,
    "Year(end)": 2002,
  },
  {
    Country: "AFGHANISTAN",
    Export: 60.77,
    Import: 18.46,
    "Total Trade": 79.23,
    "Trade Balance": 42.31,
    "Year(start)": 2002,
    "Year(end)": 2003,
  },
];

dataArray2.sort((a, b) => {
  return a["Total Trade"] - b["Total Trade"];
});
dataArray2.reverse();
console.log(dataArray2);
```

Below is the sorted array `dataArray2` in descending order of `Total Trade`:

```javascript
[
  {
    Country: "AFGHANISTAN",
    Export: 60.77,
    Import: 18.46,
    "Total Trade": 79.23,
    "Trade Balance": 42.31,
    "Year(start)": 2002,
    "Year(end)": 2003,
  },
  {
    Country: "AFGHANISTAN",
    Export: 33.2,
    Import: 21.06,
    "Total Trade": 54.26,
    "Trade Balance": 12.15,
    "Year(start)": 99,
    "Year(end)": 2000,
  },
  {
    Country: "AFGHANISTAN",
    Export: 25.86,
    Import: 26.59,
    "Total Trade": 52.45,
    "Trade Balance": -0.73,
    "Year(start)": 2000,
    "Year(end)": 2001,
  },
  {
    Country: "AFGHANISTAN",
    Export: 24.37,
    Import: 17.52,
    "Total Trade": 41.89,
    "Trade Balance": 6.85,
    "Year(start)": 2001,
    "Year(end)": 2002,
  },
  {
    Country: "AFGHANISTAN",
    Export: 12.81,
    Import: 28.14,
    "Total Trade": 40.95,
    "Trade Balance": -15.33,
    "Year(start)": 98,
    "Year(end)": 99,
  },
  {
    Country: "AFGHANISTAN",
    Export: 21.25,
    Import: 10.7,
    "Total Trade": 31.95,
    "Trade Balance": 10.55,
    "Year(start)": 97,
    "Year(end)": 98,
  },
];
```

**Conclusion:**

- Sort function sorts the elements of an array as strings in alphabetical and ascending order and then returns the sorted array.
- However, the results are not as expected when it is used to sort by the numerical elements of an array or by the numerical values of the object’s properties(in array of objects).
- To get the expected results, the `sort()` function should be provided with a compare function.

**References:**

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- [W3Schools](https://www.w3schools.com/js/js_array_sort.asp)

- [javascripttutorial](https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/)

- [Stack Overflow](https://stackoverflow.com/questions/52030110/sorting-strings-in-descending-order-in-javascript-most-efficiently)

- [section.io](https://www.section.io/engineering-education/sorting-algorithms-in-js/)

- [GeeksforGeeks](https://www.geeksforgeeks.org/insertion-sort/)
