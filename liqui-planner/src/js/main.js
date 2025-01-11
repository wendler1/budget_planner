"use strict";


// Get the input from the user
let title_1 = prompt("title:");
console.log(`title: ${title_1}`);
let input_1 = prompt("input (income/expenses):");
console.log(`input: ${input_1}`);
let amount_1 = parseInt(prompt("amount (in cent): "));
console.log(`amount: ${amount_1}`);
let date_1 = prompt("date (yyyy-mm-dd):");
console.log(`date: ${date_1}`);

let title_2 = prompt("title:");
console.log(`title: ${title_2}`);
let input_2 = prompt("input (income/expenses):");
console.log(`input: ${input_2}`);
let amount_2 = parseInt(prompt("amount (in cent): "));
console.log(`amount: ${amount_2}`);
let date_2 = prompt("date (yyyy-mm-dd):");
console.log(`date: ${date_2}`);

// Overall balance
let income;
let outcome;
let total = amount_1 + amount_2;
console.log(`total: ${total} ct`);

let positive = total >= 0;
console.log(`positive: ${positive}`);