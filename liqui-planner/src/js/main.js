"use strict";

let income = 0;
let outcome = 0;
let total = 0;

let title,
    input, 
    amount, 
    date;


// get the input from the user
const get_information = function () {
    title = prompt("title:");
    input = prompt("input (income/expenses):");
    amount = parseInt(prompt("amount (in cent): "));
    date = prompt("date (yyyy-mm-dd):");
}

get_information();


// show the information as output console
const show_information = function (title,input,amount,date) {
    console.log(`title: ${title}
input: ${input}
amount: ${amount} ct
date: ${date}`
    );
}

show_information(title,input,amount,date);


// add the information to the total
const add_information = function (input,amount) {
    if (input === "income") {
        income = income + amount;
        total = total + amount;
    } else if (input === "expenses") {
        outcome = outcome + amount;
        total = total - amount;
    } else {
        console.log("Please enter income or expenses");
    }
}

add_information(input,amount);


// show the total balance
const show_balance = function (income,outcome,total) {
    console.log(`income: ${income} ct
outcome: ${outcome} ct
total: ${total} ct
positive: ${total >= 0}`
    );
}

show_balance(income,outcome,total);
