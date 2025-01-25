"use strict";

// one-dimensional array
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits); 
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // Plum

// multi-dimensional array
let vegetables = ["Cabbage", "Tomato", "Carrot"];
let breakfast = ["Coffee", "Bread", "Eggs"];

let food = [fruits, vegetables, breakfast];

console.log(food);

// arrays and objects
let cars = [
    {name: "Toyota", year: 2015},
    {name: "BMW", year: 2019},
    {name: "Audi", year: 2017}
];

console.log(cars[0].name); // Toyota


// Array methods
let people = ["John", "Jane", "Mary", "Peter"];

// push adds an element to the end of the array
people.push("Tom");
console.log(people); // ["John", "Jane", "Mary", "Peter", "Tom"]

// pop removes the last element from the array
people.pop();
console.log(people); // ["John", "Jane", "Mary", "Peter"]

// unshift adds an element to the beginning of the array
people.unshift("Tom");
console.log(people); // ["Tom", "John", "Jane", "Mary", "Peter"]

// shift removes the first element from the array
people.shift();
console.log(people); // ["John", "Jane", "Mary", "Peter"]

// includes checks if an element exists in the array
console.log(people.includes("John")); // true

// indexOf returns the index of the element in the array
console.log(people.indexOf("Jane")); // 1

// lastIndexOf returns the last index of the element in the array
people.push("Jane");
console.log(people.lastIndexOf("Jane")); // 4







