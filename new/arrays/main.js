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




