"use strict";

let myVar = "Ruben";
let myObj = { 
    number: 5000 
};

const myFunc = (v, o) => {
    v = "Ruben Garcia";
    o.number = 10000;
};

myFunc(myVar, myObj);

console.log(myVar); // Ruben
console.log(myObj.number); // 10000

// call by value: Übergabe als Wert, gilt nur für primitive Datentypen (string, number, boolean)
// call by reference: Übergabe als Verweis / Rückverweis, gilt für komplexere Datentypen (object, array, functions)   

// test

let account = {
    iban: "DE1234567890",
    bic: "ABCDEF",
    cardholder : {
        name: "Aday",
        surname: "Garcia",
        sex: "male",
        age: 25
    },
    amount: 1000,
    active: true
};

const changeAccount = (a,e) => {
    a.amount += e;
};

changeAccount(account,500);

console.log(account.amount);