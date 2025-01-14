"use strict";

let income = 0;
let outcome = 0;
let total = 0;

// Get the input from the user
let title_1 = prompt("title:");
let input_1 = prompt("input (income/expenses):");
let amount_1 = parseInt(prompt("amount (in cent): "));
let date_1 = prompt("date (yyyy-mm-dd):");
console.log(`date: ${date_1}
    input: ${input_1}
    amount: ${amount_1} ct
    date: ${date_1}`
);

if (input_1 === "income") {
    income = income + amount_1;
    total = total + amount_1;
} else if (input_1 === "expenses") {
    outcome = outcome + amount_1;
    total = total - amount_1;
} else {
    console.log("Please enter income or expenses");
}
    

let title_2 = prompt("title:");
let input_2 = prompt("input (income/expenses):");
let amount_2 = parseInt(prompt("amount (in cent): "));
let date_2 = prompt("date (yyyy-mm-dd):");
console.log(`date: ${date_2}
    input: ${input_2}
    amount: ${amount_2} ct
    date: ${date_2}`
);

if (input_2 === "income") {
    income = income + amount_2;
    total = total + amount_2;
} else if (input_2 === "expenses") {
    outcome = outcome + amount_2;
    total = total - amount_2;
} else {
    console.log("Please enter income or expenses");
}

// Overall balance
let positive = total >= 0;

console.log(`income: ${income} ct
    outcome: ${outcome} ct
    total: ${total} ct
    positive: ${positive}`
);