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

//Examples for sorting the element strings of array in descending order

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
/* let myNumbersArray5 = [1, 11, 2, 33, 45, 65, 7, 8, 99, 10];

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

//Example 2
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
//[308, 99, 98, 95, 35, 25, 2, 0, -39, -52, -55, -56, -65, -87, -98, -258] */

//Examples for sorting the array of objects in ascending order

//Example 1:

/* const myArrayOfObjects = [
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

console.log(myArrayOfObjects); */

/* //Example 2

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

console.log(myArrayOfObjects1); */

//Example 3

/* let myArrayOfObjects2 = [
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

console.log(myArrayOfObjects2); */

//Examples for sorting the array of objects in descending order

//Example 1:

/* const myArrayOfObjects3 = [
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

console.log(myArrayOfObjects3); */

//Example 2

/* let myArrayOfObjects4 = [
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

console.log(myArrayOfObjects4); */

//Example 3

/* let myArrayOfObjects5 = [
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

console.log(myArrayOfObjects5);*/
//Examples for sorting the array of objects in descending order using reverse function
//Example 1
/* const dataArray = [
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
 */

//Example 2
/* const dataArray1 = [
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
 */

//Example 3

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
